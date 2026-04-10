/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GITHUB_USERNAME?: string;
  readonly SPOTIFY_CLIENT_ID?: string;
  readonly SPOTIFY_CLIENT_SECRET?: string;
  readonly SPOTIFY_REFRESH_TOKEN?: string;
  readonly WAKATIME_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
