import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'header-directive',
  templateUrl: 'app/header_directive.html',
  host: {
    'class': 'panel-group'
  },
  directives: [ROUTER_DIRECTIVES],
})
export class Directive {
 
}

