import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {SignupComponent } from './signup.component';
import {Directive} from './header.directive';
import { UtilService } from './util.service';
@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.html',
  styles: ['styles.css'],
  directives: [ROUTER_DIRECTIVES, Directive],
})

export class DashboardComponent {
    public randomNum = 0;
    public username = '';
    constructor(public _utilService: UtilService,public router: Router) { }
    
 ngOnInit() {
    if(!this._utilService.isDefined(localStorage.getItem('id'))){
        this.router.navigate(['/']);
    }else{
        this.username = localStorage.getItem('username');
    }
  }
}