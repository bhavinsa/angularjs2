import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { UtilService } from './util.service';
import { UserService } from './apis/user.service';
import { HomeComponent } from './home.component';

@Component({
  selector: 'signup',
  templateUrl: 'app/signup.html',
  styles: ['styles.css'],
  directives: [ROUTER_DIRECTIVES],
})

export class SignupComponent {
    signupData: any = {
        password: '',
        email:'',
        username:''
    };

    constructor(public _utilService: UtilService, public _userService: UserService, public router: Router) {}
    
 ngOnInit() {
    console.log(this._utilService.getTime());
 }
 
 onSubmit() {
      if(this._utilService.isDefined(this.signupData.username) && this._utilService.isDefined(this.signupData.password) && this._utilService.isDefined(this.signupData.email)){
          //Sign up Process - WS call.
          this._userService.createUser(this.signupData).subscribe(
          // the first argument is a function which runs on success
          data => { 
                localStorage.setItem('id', data.user._id);
                this.router.navigate(['/home']);
          },
          // the second argument is a function which runs on error
          err => {
              
              var Err = JSON.parse(err._body);
              alert(Err.error);
          },
          // the third argument is a function which runs on completion
          () => console.log('done loading foods')
            ); 
      }else{
      alert('Provide valid details.');
      }
     
     }

}