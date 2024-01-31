#!/usr/bin/env sh


(cd packages/gestalt-design-tokens && pnpm build)
(cd packages/gestalt && pnpm build)
(cd packages/gestalt-charts && pnpm build)
(cd packages/gestalt-datepicker && pnpm build)
(cd docs && pnpm build-metadata)
(cd docs && (npx next dev))

