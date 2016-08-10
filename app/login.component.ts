import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'login',
  templateUrl: 'app/login.html',
   styleUrls: [
        'styles.css'
    ], 
})

export class LoginComponent {
    public books;
    constructor(private _demoService: DemoService) { }
    
 ngOnInit() {
    
  }
    
}