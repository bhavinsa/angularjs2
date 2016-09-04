import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {SignupComponent } from './signup.component';
import {Directive} from './header.directive';
import { UtilService } from './util.service';
import { UserService } from './apis/user.service';
import * as io from "socket.io-client";

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.html',
  styles: ['styles.css'],
  directives: [ROUTER_DIRECTIVES, Directive],
})

export class DashboardComponent {
    public randomNum = 0;
    public username = '';
    public products;
    constructor(public _utilService: UtilService, public _userService: UserService, public router: Router) { }
    
 ngOnInit() {
     
     //Socket Connection.
     var socket = io.connect('http://localhost:1227');
     socket.on('connect', function(){
     console.log('connect')
     });
     
     socket.emit('echo',{'user_id':'1','message':'test'});
     socket.on('echo',function(data){
		 console.log(data);
	 });
     
    if(!this._utilService.isDefined(localStorage.getItem('id'))){
        this.router.navigate(['/']);
    }else{
        this.username = localStorage.getItem('username');
        this.getProducts(localStorage.getItem('id'));
    }
    
  }

public getProducts(id){
       this._userService.getProducts(id).subscribe(
            data => {  
                this.products = data.product;
            },
            err => {
              var Err = JSON.parse(err._body);
              alert(Err.error);
            },
            () => console.log('done loading.')
            );
  }
    
}