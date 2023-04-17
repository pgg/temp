import {
  createActionGroup,
  emptyProps,
  props
} from '@ngrx/store';
import { APP_FEATURE_KEY } from './app.models';

export const AppActions = createActionGroup({
  source: APP_FEATURE_KEY,
  events: {
    'load': emptyProps(),
    'load progress': props<{ progress: number }>(),
    'load success': emptyProps()
  },
});
