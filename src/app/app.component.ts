import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items = [];

  ngOnInit(){
    this.items = Array.from(Array(50).keys());
  }
}
