/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BREAKOUT_INTEREST_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
