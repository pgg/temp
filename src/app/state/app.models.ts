export const APP_FEATURE_KEY = 'app';

export interface AppState {
  progress: number;
  loading: boolean;
}

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: AppState;
}
