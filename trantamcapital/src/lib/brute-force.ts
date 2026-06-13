const WINDOW_MS = 15 * 60_000;
const USERNAME_MAX = 5;
const USERNAME_LOCKOUT_MS = 15 * 60_000;
const IP_MAX = 10;
const IP_LOCKOUT_MS = 30 * 60_000;

interface AttemptRecord {
  count: number;
  windowStart: number;
  lockedUntil: number;
}

const usernameAttempts = new Map<string, AttemptRecord>();
const ipAttempts = new Map<string, AttemptRecord>();

function cleanup() {
  const now = Date.now();
  for (const [k, v] of usernameAttempts) {
    if (v.lockedUntil > 0 && now > v.lockedUntil) usernameAttempts.delete(k);
    else if (v.lockedUntil === 0 && now > v.windowStart + WINDOW_MS * 2) usernameAttempts.delete(k);
  }
  for (const [k, v] of ipAttempts) {
    if (v.lockedUntil > 0 && now > v.lockedUntil) ipAttempts.delete(k);
    else if (v.lockedUntil === 0 && now > v.windowStart + WINDOW_MS * 2) ipAttempts.delete(k);
  }
}

export function checkBruteForce(
  username: string,
  ip: string,
): { blocked: boolean; retryAfterMinutes: number } {
  cleanup();
  const now = Date.now();
  const userRec = usernameAttempts.get(username.toLowerCase());
  if (userRec && userRec.lockedUntil > 0 && now < userRec.lockedUntil) {
    return { blocked: true, retryAfterMinutes: Math.ceil((userRec.lockedUntil - now) / 60_000) };
  }
  const ipRec = ipAttempts.get(ip);
  if (ipRec && ipRec.lockedUntil > 0 && now < ipRec.lockedUntil) {
    return { blocked: true, retryAfterMinutes: Math.ceil((ipRec.lockedUntil - now) / 60_000) };
  }
  return { blocked: false, retryAfterMinutes: 0 };
}

function recordOne(
  map: Map<string, AttemptRecord>,
  key: string,
  maxAttempts: number,
  lockoutMs: number,
): number {
  const now = Date.now();
  let rec = map.get(key);

  // If locked, don't increment (shouldn't reach here if checkBruteForce ran first)
  if (rec && rec.lockedUntil > 0 && now < rec.lockedUntil) {
    return Math.ceil((rec.lockedUntil - now) / 60_000);
  }

  // Start new window or sliding window reset
  if (!rec || now > rec.windowStart + WINDOW_MS) {
    rec = { count: 1, windowStart: now, lockedUntil: 0 };
  } else {
    rec.count++;
  }

  // Check if threshold reached
  if (rec.count >= maxAttempts) {
    rec.lockedUntil = now + lockoutMs;
    map.set(key, rec);
    return Math.ceil(lockoutMs / 60_000);
  }

  map.set(key, rec);
  return 0;
}

export function recordFailedAttempt(
  username: string,
  ip: string,
): { retryAfterMinutes: number } {
  cleanup();
  const userMin = recordOne(usernameAttempts, username.toLowerCase(), USERNAME_MAX, USERNAME_LOCKOUT_MS);
  if (userMin > 0) return { retryAfterMinutes: userMin };

  const ipMin = recordOne(ipAttempts, ip, IP_MAX, IP_LOCKOUT_MS);
  return { retryAfterMinutes: ipMin };
}

export function resetAttempts(username: string, ip: string) {
  usernameAttempts.delete(username.toLowerCase());
  ipAttempts.delete(ip);
}
