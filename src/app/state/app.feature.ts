import {
  createReducer,
  on,
  createFeature
} from '@ngrx/store';
import {
  AppState,
  APP_FEATURE_KEY
} from './app.models';
import { AppActions } from './app.actions';

const TempState: AppState = {
  loading: false,
  progress: 0,
};

export const AppFeature = createFeature({
  name: APP_FEATURE_KEY,
  reducer: createReducer(
    TempState,
    on(AppActions.load, (state) => ({
      ...state,
      loading: true,
    })),
    on(AppActions.loadProgress, (state, { progress }) => ({
      ...state,
      progress
    })),
    on(AppActions.loadSuccess, (state) => ({
      ...state,
      loading: false,
    })),
  ),
});
