import { App3WrapperComponent } from './app3-wrapper.component';
import { provideRouter } from '@angular/router';
import { App3Component } from './app3.component';

it('wrapper mount should route to component', () => {
  cy.mount(App3WrapperComponent, {
    providers: [
      provideRouter([
        {
          path: '**',
          component: App3Component
        }
      ])
    ]
  });
  cy.contains('app works!');
})

