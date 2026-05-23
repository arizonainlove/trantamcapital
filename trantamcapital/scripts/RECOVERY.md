# Recovery Guide — CMS Content

## Backup

Create a snapshot of all CMS content (Markdown files in `src/content/`):

```bash
npm run backup
```

Backups are saved to `.backups/<timestamp>/`.

## Restore

List available backups:

```bash
npm run restore
```

Restore from a specific backup:

```bash
npm run restore 2026-05-23T10-30-00
```

## Git-Based Recovery

Since all CMS content is committed to GitHub, you can use git for recovery:

1. Find the commit hash before the issue:
   ```bash
   git log --oneline -- src/content/
   ```

2. Restore a single file:
   ```bash
   git checkout <commit-hash> -- src/content/news/article.md
   ```

3. Restore all content from a specific commit:
   ```bash
   git checkout <commit-hash> -- src/content/
   ```

## Admin Panel Export Feature

The admin panel at `/admin` allows you to view, edit, and manage all content.
Every save in the admin panel creates a commit on GitHub, so git history
serves as an automatic backup of all changes.

## Recovery Steps After Data Loss

1. **If content in website is outdated**: Trigger a fresh deploy via Vercel
   dashboard or push an empty commit: `git commit --allow-empty -m "rebuild"`

2. **If files are deleted from repo**: Use git to restore (see above),
   then push to GitHub to trigger rebuild.

3. **If backup is needed before major changes**: Run `npm run backup` first
