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

- Keep reference-gallery image data in the page and pass extra images to ReferenzTeaser so other pages retain their existing galleries.
- Keep career workday station data separate from its interactive presentation so each trade's schedule remains independently maintainable.
- CategoryBar renders its final label as H1 only when a page explicitly opts in, preserving heading hierarchy on other pages.
- Keep grouped career listings and availability in a browser-safe data module; use individual route files and the shared job layout for each role so links resolve independently.
- IONOS deployment must download both asset-pointer URLs and literal Lovable media URLs before building, then verify the affected live image URLs after SFTP upload; static hosting cannot serve Lovable's asset proxy itself.
