import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { AppFacade } from './state';

@Component({
  selector: 'app-root',
  template: `
  {{facade.loading$ | async}} | <span data-testid="progress">{{facade.progress$ | async}}</span>
  `,
  standalone: true,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  facade = inject(AppFacade);
}
