/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IMOVEIS_URL?: string;
  readonly VITE_SOLAR_URL?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
