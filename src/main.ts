import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { provideEffects } from '@ngrx/effects';
import { AppFeature, AppEffects, AppFacade } from './app/state';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideStore(),
    provideStoreDevtools(),
    provideState(AppFeature),
    provideEffects(AppEffects),
    AppFacade
  ],
}).catch((err) => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { App3WrapperComponent } from './app/app3-wrapper.component';
// import { provideRouter } from '@angular/router';
// import { App3Component } from './app/app3.component';

// bootstrapApplication(App3WrapperComponent, {
//   providers: [
//     provideAnimations(),
//     provideRouter([
//       {
//         path: '**',
//         component: App3Component
//       }
//     ]),
//   ],
// }).catch((err) => console.error(err));

