/**
 * Strip HTML tags from a string to prevent XSS in rendered content.
 * This is a defense-in-depth measure — React already escapes text content
 * in JSX, but sanitizing at the data layer ensures safety even if rendering
 * strategy changes (e.g. switching to dangerouslySetInnerHTML).
 */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

/**
 * Sanitize a string for safe rendering. Currently strips HTML tags.
 * Extend this function with additional checks as needed.
 */
export function sanitize(str: string): string {
  return stripHtml(str);
}
