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
  templateUrl: 'app/add_products.html',
  styles: ['styles.css'],
  directives: [ROUTER_DIRECTIVES, Directive],
})

export class AddProductComponent {
     productData: any = {
        name: '',
        description:'',
        filesToUpload:'',
    };
    
    public filesToUpload: Array<File>;
    public upload: Array<File>;
    public randomNum = 0;
    constructor(public _utilService: UtilService, public _userService: UserService, private _demoService: DemoService, public router: Router) { }
    
    ngOnInit() {
    
    } 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }   
    
    public addProduct(){
        if(this._utilService.isDefined(this.filesToUpload) && this._utilService.isDefined(this.productData.name) && this._utilService.isDefined(this.productData.description) ){
            var formData: any = new FormData();
            
            for(var i = 0; i < this.filesToUpload.length; i++) {
                formData.append("product_img", this.filesToUpload[i], this.filesToUpload[i].name);
            }
            formData.append('name', this.productData.name); 
            formData.append('description', this.productData.description);
            this._userService.addProduct(formData).subscribe(
            data => {  
                
            },
            err => {
              var Err = JSON.parse(err._body);
              alert(Err.error);
            },
            () => console.log('done loading.')
            );    
            }else{
            alert('Provide valid details.');
            }     
  }
