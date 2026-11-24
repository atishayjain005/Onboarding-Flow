# Eden onboarding demo

A React four-step onboarding UI: profile, workspace, personal/team use, and a local completion summary. This is a portfolio demo, not an account service. It does not create a live workspace, reserve a URL, or send information to a server.

## Run and check

Use Node.js 22 and npm:

```sh
npm ci --ignore-scripts
npm start
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

The build includes ESLint checks. There is no separate TypeScript checker. GitHub Actions runs tests and the production build on Ubuntu 24.04.

## Behavior and privacy

- Names must contain at least four characters after trimming outer whitespace.
- Enter submits forms; native radio buttons support keyboard choice.
- Completed progress links let you edit earlier steps. Saved values are restored.
- Drafts remain in this browser's localStorage under the existing `flow-one` and `flow-two` keys, plus `flow-three` for usage.
- Missing or malformed drafts recover to the appropriate earlier step. Blocked writes show an error and retain the current input.
- Reloading restores saved steps, not unsaved edits. Separate tabs can overwrite each other's saved drafts.
- Do not enter sensitive information. Clear this site's browser data to remove drafts.
- The optional URL is a demo label, not a validated or reserved address.

## Release status

Local tests and build pass; desktop keyboard and 320/768/1280px browser checks were performed. Hosting must serve `build/index.html` for application routes such as `/stepTwo`.

The legacy react-scripts dependency tree has **84 audit findings: 7 critical, 41 high, 22 moderate, 14 low** as of 25 November 2026. This is a release blocker, not a production-ready claim. Do not use a forced audit fix without scoping and validating the resulting toolchain changes.

No Pages configuration or repository homepage was present during inspection. PR creation revealed an existing Netlify integration (legendary-gumdrop-fb48cd). A bundled SPA fallback supports direct route reloads; preview verification and dependency remediation remain release checks. Build, push, preview, and production release are separate states.

See [the improvement log](docs/improvement-log.md) for scoped ideas and remaining work.
