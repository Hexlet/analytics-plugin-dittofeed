/** Опции инициализации DittofeedSdk.init() (минимум — публичный writeKey) */
export type DittofeedSdkInitOptions = {
  writeKey: string;
  [k: string]: any; // например, apiHost и прочее из SDK
};

/** Конфиг плагина */
export type DittofeedPluginConfig = {
  sdkInit: DittofeedSdkInitOptions;
  /** Включить/выключить плагин. По умолчанию true */
  enabled?: boolean;
};
