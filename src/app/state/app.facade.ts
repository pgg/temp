import { inject, Injectable } from '@angular/core';
import {
  select,
  Store
} from '@ngrx/store';
import { AppFeature } from './app.feature';
import { AppPartialState } from './app.models';

@Injectable()
export class AppFacade {
  readonly store = inject(Store<AppPartialState>);
  readonly loading$ = this.store.pipe(select(AppFeature.selectLoading));
  readonly progress$ = this.store.pipe(select(AppFeature.selectProgress));
}
