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
  directives: [ROUTER_DIRECTIVES],
})

export class GetProductsComponent { 
  public id: any;
  paramsSub: any;
  
  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = + params['id']);
    console.log('id -->' + this.id);
  }
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}

	  