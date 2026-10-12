<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project decisions
- Dedicated editorial pages use TanStack file routes and preserve the homepage's bespoke visual language, so shareable content has its own navigation and metadata.
- Global navigation links only to implemented pages; homepage sections remain available by scrolling and page-local links.
- Dedicated About, Services, and Projects pages use distinct editorial information architectures and page-specific controls, so they do not repeat one page template.
