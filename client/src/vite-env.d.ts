/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_IP: string;
  readonly VITE_SERVER_PORT: string;
}

interface ImportMetaEnv {
  readonly env: ImportMetaEnv;
}
