import { provideRouter, RouterConfig } from '@angular/router';

import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './about.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { DashboardComponent } from './dashboard.component';

export const routes: RouterConfig = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
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