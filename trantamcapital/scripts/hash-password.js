/**
 * Hash password utility for admin users.
 * Usage: node scripts/hash-password.js <password>
 * Output: bcrypt hash (copy into admin-users.json)
 */
const bcrypt = require("bcryptjs");

const password = process.argv[2];
if (!password) {
  console.error("Usage: node scripts/hash-password.js <password>");
  process.exit(1);
}

const salt = bcrypt.genSaltSync(12);
const hash = bcrypt.hashSync(password, salt);
console.log(hash);
