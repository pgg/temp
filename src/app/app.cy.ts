import { provideState, provideStore } from '@ngrx/store';
import { AppComponent } from './app.component';
import { provideEffects } from '@ngrx/effects';
import { AppEffects, AppFacade, AppFeature } from './state';

it('should test progress', () => {
  cy.mount(AppComponent, {
    providers: [
      provideStore(),
      provideState(AppFeature),
      provideEffects(AppEffects),
      AppFacade
    ]
  });
  cy.testid('progress').should('have.text', '0');
  cy.testid('progress').should('have.text', '100');
})

