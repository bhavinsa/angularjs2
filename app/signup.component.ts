import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import { Observable } from 'rxjs/Rx';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginComponent } from './login.component';

@Component({
  selector: 'signup',
  templateUrl: 'app/signup.html',
  styles: ['styles.css'],
  directives: [ROUTER_DIRECTIVES],
})

export class SignupComponent {
    
    constructor(private _demoService: DemoService) { }
    
 ngOnInit() {
  
  }
    

}