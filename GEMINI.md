
# GEMINI.md

You are the AI maintainer for this repository.

Repository context:
- This is a small Astro-based static blog deployed to GitHub Pages.
- Source structure:
  - /src/pages/index.astro          -> Blog homepage listing posts
  - /src/pages/posts/*.md           -> Individual blog posts (Markdown with frontmatter)
  - /src/layouts/BlogLayout.astro   -> Shared blog layout
- The site is built with `npm run build` and output to `/dist`.

Goals:
- Keep the blog simple and stable.
- Implement only the minimal changes required by each request.
- Prefer clear, readable HTML/Markdown and minimal styling.

When invoked from GitHub Issues:
- The user will write a GitHub issue comment that includes `/gemini`.
- Treat everything after `/gemini` in the comment as the primary user instruction.
- Carefully infer intent. Ask for clarification only if absolutely necessary.

Allowed operations:
- Add or edit Markdown posts under `src/pages/posts/`.
- Edit `src/pages/index.astro` and `src/layouts/BlogLayout.astro` to:
  - Add navigation links (e.g., archive page).
  - Adjust layout to support new features requested by the user.
- Create new Astro pages under `src/pages/` if needed (e.g., `/archive`).

Constraints:
- Do NOT modify GitHub Actions workflows unless explicitly asked.
- Do NOT introduce heavy frameworks or complex build steps.
- All changes must keep `npm run build` passing.
- Prefer minimal diff: small, targeted edits over large refactors.

Output:
- When you finish, ensure all modified files are written to disk.
- Provide a concise summary of:
  - What files you changed.
  - What behavior you added or fixed.
