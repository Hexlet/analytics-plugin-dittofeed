import type { AnalyticsPlugin } from 'analytics';
import { DittofeedSdk } from '@dittofeed/sdk-web';
import type { DittofeedPluginConfig } from './types';

/**
 * Dittofeed plugin for analytics.js (David Wells)
 * - uses @dittofeed/sdk-web under the hood
 */
const dittofeed = (options: DittofeedPluginConfig): AnalyticsPlugin => {
  const defaultOptions: Record<string, boolean> = {
    enabled: true,
  }

  return {
    name: 'dittofeed',
    config: { ...defaultOptions, ...options },

    initialize: ({ config }: { config: DittofeedPluginConfig }) => {
      if (!config.enabled) return

      DittofeedSdk.init(options.sdkInit);
    },

    loaded: ({ config }: { config: DittofeedPluginConfig }) => !!config.enabled,

    identify: async ({ payload }: any) => {
      await DittofeedSdk.identify({
        userId: payload?.userId,
        traits: payload?.traits ?? payload?.properties ?? {},
      });
    },

    track: async ({ payload }: any) => {
      await DittofeedSdk.track({
        userId: payload?.userId,
        event: payload?.event ?? payload?.name,
        properties: payload?.properties ?? {},
      });
    },

    page: async ({ payload }: any) => {
      const name =
        payload?.name ??
        payload?.properties?.name ??
        (typeof document !== 'undefined' ? document.title : undefined);

      await DittofeedSdk.page({
        userId: payload?.userId,
        name,
        properties: payload?.properties ?? {},
      });
    },
  };
};

export default dittofeed;
