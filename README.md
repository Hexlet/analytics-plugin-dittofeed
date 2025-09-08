# @hexlet/analytics-plugin-dittofeed

Плагин для [analytics](https://github.com/DavidWells/analytics), внутри использует `@dittofeed/sdk-web`.
Поддерживает `identify`, `track`, `page`.
Без ретраев/батчей, без context/transform — поля прокидываются напрямую, `anonymousId/messageId/timestamp` генерирует SDK.

## Установка
```bash
npm i @hexlet/analytics-plugin-dittofeed
npm i analytics
