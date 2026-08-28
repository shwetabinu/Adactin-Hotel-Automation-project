import dotenv from 'dotenv';
import path from 'path';

// Resolved from this file's directory so the .env lookup works no matter which
// directory the test run is launched from.
const projectRoot = path.resolve(__dirname, '..');

export type Build = 'build1' | 'build2';

export interface EnvConfig {
  build: Build;
  baseURL: string;
  defaultUser: {
    username: string;
    password: string;
  };
  timeouts: {
    default: number;
    navigation: number;
  };
  ci: boolean;
}

const build = (process.env.BUILD as Build) ?? 'build2';

dotenv.config({
  path: path.join(projectRoot, `.env.${build}`),
});

export function getEnvConfig(): EnvConfig {
  return {
    build,
    baseURL: process.env.BASE_URL ?? 'https://adactinhotelapp.com',
    defaultUser: {
      username: process.env.TEST_USERNAME ?? '',
      password: process.env.TEST_PASSWORD ?? '',
    },
    timeouts: {
      default: Number(process.env.DEFAULT_TIMEOUT ?? 10_000),
      navigation: Number(process.env.NAV_TIMEOUT ?? 15_000),
    },
    ci: process.env.CI === 'true',
  };

  
}
export function assertEnvConfig(config: EnvConfig): void {
  if (!config.defaultUser.username || !config.defaultUser.password) {
    throw new Error(
      `Missing TEST_USERNAME/TEST_PASSWORD for build "${config.build}". Check .env.${config.build}.`
    );
  }
}