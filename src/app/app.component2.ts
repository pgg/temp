import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { AppActions, AppFacade } from './state';

@Component({
  selector: 'app-root',
  template: `
  {{facade.loading$ | async}} | <span data-testid="progress">{{facade.progress$ | async}}</span>
  `,
  standalone: true,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent2 implements OnInit {
  facade = inject(AppFacade);

  ngOnInit(): void {
    this.facade.store.dispatch(AppActions.load())
  }
}
