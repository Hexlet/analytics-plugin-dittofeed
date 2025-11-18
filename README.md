# Analytics Plugin for Dittofeed

## Overview

Analytics plugin for [analytics](https://github.com/DavidWells/analytics), powered by [`@dittofeed/sdk-web`](https://www.npmjs.com/package/@dittofeed/sdk-web).
Supports `identify`, `track`, and `page` methods.


## Installation
```bash
npm i @hexlet/analytics-plugin-dittofeed
```

## Usage

```ts
import Analytics from 'analytics';
import dittofeed from '@hexlet/analytics-plugin-dittofeed';

const analytics = Analytics({
  app: 'test-app',
  plugins: [
    dittofeed({
      sdkInit: {
        writeKey: 'Basic abcdefg...', // Public write key from Dittofeed dashboard
        // apiHost: 'https://app.dittofeed.com' // Can be overridden for self-host
      },
      enable: process.env.NODE_ENV === 'production', // Enable only in production
    }),
  ],
});

// page
analytics.page(); // page event (defaults with document.title)

// identify
analytics.identify('user_123', {
  email: 'user@example.com',
  firstName: 'John',
});

// track
analytics.track('Made Purchase', {
  itemId: 'abc123',
  price: 49.9,
});
```

## Publishing

Releases are managed through [`release-it`](https://github.com/release-it/release-it) (see `make release`). The flow now publishes the package to both npm and GitHub Packages:

1. Ensure the build passes (`npm run build`).
2. Export authentication tokens before running the release command:
   ```bash
   export NPM_TOKEN=xxxx           # Token for registry.npmjs.org
   export NODE_AUTH_TOKEN=yyyy     # PAT for npm.pkg.github.com
   ```
   Optionally wire them in `.npmrc`:
   ```
   //registry.npmjs.org/:_authToken=${NPM_TOKEN}
   //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
   ```
3. Run `make release` (or `npx release-it`). This will build, publish to npm, then automatically run `npm run publish:github` which publishes the same tarball to `https://npm.pkg.github.com`.
