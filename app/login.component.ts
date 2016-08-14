import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { SignupComponent } from './signup.component';
import {Directive} from './header.directive';
import { UtilService } from './util.service';
import { UserService } from './apis/user.service';


@Component({
  selector: 'login',
  templateUrl: 'app/login.html',
  styles: ['styles.css'],
  directives: [ROUTER_DIRECTIVES, Directive],
})

export class LoginComponent {
     loginData: any = {
        password: '',
        email:'',
        username:''
    };
    public randomNum = 0;
    constructor(public _utilService: UtilService, public _userService: UserService, private _demoService: DemoService, public router: Router) { }
    
 ngOnInit() {
  
  }
    
    onSubmit(){
      if(this._utilService.isDefined(this.loginData.username) &&  this._utilService.isDefined(this.loginData.password)){
          //Sign up Process - WS call.
          this._userService.loginUser(this.loginData).subscribe(
          // the first argument is a function which runs on success
          data => { 
                console.log(data);
                if(this._utilService.isDefined(data.user)){
                localStorage.setItem('id', data.user._id);
                localStorage.setItem('username', data.user.username);
                this.router.navigate(['/dashboard']);
                }else{
                    alert('Provide valid details.');
                }
          },
          // the second argument is a function which runs on error
          err => {
              var Err = JSON.parse(err._body);
              alert(Err.error);
          },
          // the third argument is a function which runs on completion
          () => console.log('done loading.')
            ); 
      }else{
      alert('Provide valid details.');
      }
     
     }
}