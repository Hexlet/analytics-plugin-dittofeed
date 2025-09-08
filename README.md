# @hexlet/analytics-plugin-dittofeed

Плагин для [analytics](https://github.com/DavidWells/analytics), внутри использует `@dittofeed/sdk-web`.
Поддерживает `identify`, `track`, `page`.


## Установка
```bash
npm i @hexlet/analytics-plugin-dittofeed


## Использование

```ts
import Analytics from 'analytics';
import dittofeed from '@hexlet/analytics-plugin-dittofeed';

// создаём analytics-инстанс
const analytics = Analytics({
  app: 'test-app',
  plugins: [
    dittofeed({
      sdkInit: {
        writeKey: 'Basic abcdefg...', // Публичный ключ из Dittofeed dashboard
        // apiHost: 'https://app.dittofeed.com' // можно переопределить для self-host
      },
      enable: process.env.NODE_ENV === 'production', // включаем только в проде
    }),
  ],
});

// page
analytics.page(); // событие page (по умолчанию с document.title)

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
