import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SignupComponent } from './signup.component';
import { Directive } from './directive';

@Component({
  selector: 'login',
  templateUrl: 'app/login.html',
  styles: ['styles.css'],
  directives: [ROUTER_DIRECTIVES, Directive],
})

export class LoginComponent {
    public randomNum = 0;
    constructor(private _demoService: DemoService) { }
    
 ngOnInit() {
  
  }
    

}