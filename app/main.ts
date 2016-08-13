import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { UtilService } from './util.service';
import { UserService } from './apis/user.service';
//import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  DemoService,
  UtilService,
  UserService
  //{provide: LocationStrategy, useClass: HashLocationStrategy}
]);