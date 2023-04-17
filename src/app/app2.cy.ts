import { provideState, provideStore } from '@ngrx/store';
import { AppComponent2 } from './app.component2';
import { provideEffects } from '@ngrx/effects';
import { AppEffects2, AppFacade, AppFeature } from './state';

it('should test progress', () => {
  cy.mount(AppComponent2, {
    providers: [
      provideStore(),
      provideState(AppFeature),
      provideEffects(AppEffects2),
      AppFacade
    ]
  });
  cy.testid('progress').should('have.text', '0');
  cy.testid('progress').should('have.text', '100');
})

