import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from 'firebase/remote-config';
import { app } from './firebase';

export const remoteConfig = getRemoteConfig(app);

export const initRemoteConfig = async () => {
  remoteConfig.settings = {
    minimumFetchIntervalMillis: import.meta.env.DEV ? 0 : 60 * 60 * 1000,
    fetchTimeoutMillis: 60 * 1000,
  };

  remoteConfig.defaultConfig = {
    BOOKS_JSON: '[]',
    // AUTHORS_JSON: [], todo: handle undefined data
  };

  await fetchAndActivate(remoteConfig);
};

export const getRemoteString = (key: string) =>
  getValue(remoteConfig, key).asString();

export const getRemoteJson = (key: string) =>
  JSON.parse(getValue(remoteConfig, key).asString());
