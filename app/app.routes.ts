import { provideRouter, RouterConfig } from '@angular/router';

import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './about.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';

export const routes: RouterConfig = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: LoginComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', component: AboutHomeComponent },
      { path: 'item/:id', component: AboutItemComponent }
    ]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];