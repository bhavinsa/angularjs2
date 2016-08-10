import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UtilService } from './util.service';
@Component({
  selector: 'header-directive',
  templateUrl: 'app/header_directive.html',
  host: {
    'class': 'panel-group'
  },
  directives: [ROUTER_DIRECTIVES],
})
export class Directive {
     constructor(public router: Router) {}
    
    public logout(){
        localStorage.setItem('id', '');
        this.router.navigate(['/']);
    }
}

