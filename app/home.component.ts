import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'home',
  templateUrl: 'app/home.html'
})

export class HomeComponent {
    public books;
    public data;
    public num = 1;
    public randomNum = 0;
    constructor(private _demoService: DemoService) { }
    
 ngOnInit() {
    this.getBooks();
    this.getData();
  }
    
 getBooks(){
    this._demoService.getBooks().subscribe(
      // the first argument is a function which runs on success
      data => { this.books = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

 getData(){
    this._demoService.getData().subscribe(
      // the first argument is a function which runs on success
      data => { this.data = data.data.results},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
    
getRandomNum(){
    console.log(this.num);
    this.randomNum = Math.floor(Math.pow(10, this.num-1) + Math.random() * (Math.pow(10, this.num) - Math.pow(10, this.num-1) - 1));
  }; 
}