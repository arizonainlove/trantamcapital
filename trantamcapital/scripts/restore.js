/**
 * CMS Content Restore Script
 *
 * Restores CMS content from a backup snapshot.
 * Usage: node scripts/restore.js <backup-folder-name>
 *
 * Example: node scripts/restore.js 2026-05-23T10-30-00
 * This restores .backups/2026-05-23T10-30-00/ to src/content/
 */

const fs = require("fs");
const path = require("path");

const BACKUP_ROOT = path.join(__dirname, "..", ".backups");
const CONTENT_DIR = path.join(__dirname, "..", "src", "content");

function restore() {
  const folder = process.argv[2];
  if (!folder) {
    console.log("Available backups:");
    if (fs.existsSync(BACKUP_ROOT)) {
      const backups = fs.readdirSync(BACKUP_ROOT).filter((f) =>
        fs.statSync(path.join(BACKUP_ROOT, f)).isDirectory()
      );
      if (backups.length === 0) {
        console.log("  No backups found.");
      } else {
        backups.forEach((b) => console.log(`  - ${b}`));
      }
    } else {
      console.log("  No backups found.");
    }
    console.log("\nUsage: node scripts/restore.js <backup-folder-name>");
    process.exit(1);
  }

  const backupDir = path.join(BACKUP_ROOT, folder);
  if (!fs.existsSync(backupDir)) {
    console.error(`Backup not found: .backups/${folder}`);
    process.exit(1);
  }

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
        console.log(`  Restored: ${path.relative(CONTENT_DIR, destPath)}`);
      }
    }
  }

  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  copyDir(backupDir, CONTENT_DIR);
  console.log(`Restore complete from .backups/${folder}/`);
}

restore();
