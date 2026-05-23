/**
 * CMS Content Backup Script
 *
 * Creates a timestamped snapshot of CMS content files.
 * Usage: node scripts/backup.js
 *
 * Snapshots are saved to .backups/<timestamp>/
 * To restore: copy files from a snapshot back to src/content/
 */

const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "..", "src", "content");
const BACKUP_ROOT = path.join(__dirname, "..", ".backups");

function backup() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.log("No CMS content directory found at src/content/. Nothing to back up.");
    return;
  }

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-")
    .slice(0, 19);

  const backupDir = path.join(BACKUP_ROOT, timestamp);
  fs.mkdirSync(backupDir, { recursive: true });

  let fileCount = 0;

  // Recursively copy content files
  function copyDir(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyDir(srcPath, destPath);
      } else if (entry.name.endsWith(".md")) {
        fs.copyFileSync(srcPath, destPath);
        fileCount++;
      }
    }
  }

  copyDir(CONTENT_DIR, backupDir);
  console.log(`Backup complete: ${fileCount} files saved to .backups/${timestamp}/`);
}

backup();
