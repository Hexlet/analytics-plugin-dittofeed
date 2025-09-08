# Analytics Plugin for Yandex Metrika

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
