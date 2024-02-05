#!/usr/bin/env sh

# Simplified start script for the stack blitz environment, which can't handle multiple watchers
# set -x
# set -e

# (cd packages/gestalt-design-tokens && yarn build)
# (cd packages/gestalt && (yarn install) && (yarn run c))
# (cd packages/gestalt-charts && yarn build)
# (cd packages/gestalt-datepicker && yarn build)
# (cd docs && yarn build-metadata)
# (cd docs && (yarn install) &&  (npx next dev))

concurrently "(cd packages/gestalt && yarn watch)" "(cd packages/gestalt-charts && yarn watch)" "(cd packages/gestalt-datepicker && yarn watch)" "(cd packages/eslint-plugin-gestalt && yarn watch)" "(cd packages/gestalt-design-tokens && yarn watch)" "(cd docs && yarn dev)"