# Certification credential images

Upload your Salesforce certificate screenshots or PDF exports here.

## File naming

Use these exact filenames (PNG, JPG, or WebP):

| Certification | Filename |
|---------------|----------|
| Platform Developer I | `platform-developer-i.png` |
| Platform App Builder | `platform-app-builder.png` |
| Platform Administrator | `platform-administrator.png` |
| Agentforce Specialist | `agentforce-specialist.png` |

If you use JPG or WebP instead, update `credentialImage` in `src/data/portfolio.ts` for that entry.

## Tips

- Save files as `name.png`, not `name.png.png` (Windows sometimes adds `.png` twice if the name already ends in `.png`).
- Prefer PNG or WebP for sharp text on screen captures.
- Crop to the certificate badge or full credential page; the site scales images to fit the popup.
- After adding files, run `npm run dev` and click a certification card to preview.
