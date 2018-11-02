import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  public maxSessionInSeconds = 60;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log("[header] - do check called");
  }  

}
