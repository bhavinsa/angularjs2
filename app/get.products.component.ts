import { Component } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { SignupComponent } from './signup.component';
import {Directive} from './header.directive';
import { UtilService } from './util.service';
import { UserService } from './apis/user.service';


@Component({
  selector: 'get-product',
  templateUrl: 'app/get_products.html',
  styles: ['styles.css'],
  directives: [ROUTER_DIRECTIVES, Directive],
})

export class GetProductsComponent { 
  public id: any = '';
  public paramsSub: any;
  public productData = {
      name: '',
      description: '',
      img_name: '',
      created: ''
  }
  constructor(private activatedRoute: ActivatedRoute, public _utilService: UtilService, public router: Router, public _userService: UserService) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this._utilService.isDefined(this.id)){
       this.getProductDetails();
    }
  }
  
  ngOnInit() {
    if(!this._utilService.isDefined(localStorage.getItem('id'))){
        this.router.navigate(['/']);
    }
    //this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = + //this.activatedRoute.params._value.id);
  }
    
  public getProductDetails(){
       this._userService.getProductDetails(this.id).subscribe(
            data => {
                 if(this._utilService.isDefined(data.product)){
                     this.productData = data.product;
                 }else{
                     alert("Data not found.");
                 }
            },
            err => {
              var Err = JSON.parse(err._body);
              alert(Err.error);
            },
            () => console.log('done loading.')
            );
  }
  
  ngOnDestroy() {
    //this.paramsSub.unsubscribe();
  }
}

	  