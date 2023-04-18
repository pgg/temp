import { RouterOutlet } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3WrapperComponent { }
