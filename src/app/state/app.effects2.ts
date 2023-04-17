import { Injectable, inject } from '@angular/core';
import {
  createEffect,
  Actions,
  ofType,
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

@Injectable()
export class AppEffects2 {
  readonly #actions$ = inject(Actions);

  progress$ = createEffect(() => this.#actions$.pipe(
    ofType(AppActions.load),
    exhaustMap(() => interval().pipe(
      map(next => next),
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
}
