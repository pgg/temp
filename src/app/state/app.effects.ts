import { Injectable, inject } from '@angular/core';
import {
  createEffect,
  Actions,
  ofType,
  OnInitEffects,
} from '@ngrx/effects';
import { AppActions } from './app.actions';
import {
  exhaustMap,
  first,
  map,
  takeWhile,
} from 'rxjs/operators';
import {
  interval,
} from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class AppEffects implements OnInitEffects {
  readonly #actions$ = inject(Actions);

  progress$ = createEffect(() => this.#actions$.pipe(
    ofType(AppActions.load),
    exhaustMap(() => interval(100).pipe(
      map(next => next * 20),
      takeWhile(next => next < 100, true),
      map(progress => AppActions.loadProgress({ progress }))
    )),
  ));

  success$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(AppActions.loadProgress),
      first(({ progress }) => progress === 100),
      map(() => AppActions.loadSuccess()),
    )
  );

  ngrxOnInitEffects = (): Action => AppActions.load();
}
