import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'signup',
  templateUrl: 'app/signup.html'
})

export class SignupComponent {
    public books;
    constructor(private _demoService: DemoService) { }
    
 ngOnInit() {
    
  }
    
}