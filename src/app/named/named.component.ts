import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'named-component',
  templateUrl: './named.component.html',
  styleUrls: ['./named.component.css']
})
export class NamedComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked {

  @Input() name:string;
  @Input() hasChild:boolean = false;
  @Input() clickCounter:number = 0;

  constructor() { }

  private logEvent(event){
    console.log(`[${this.name}] - ${event}`);
  }

  ngOnInit() {
    this.logEvent('ngOnInit');
  }

  ngOnChanges() {
    this.logEvent('ngOnChanges');
  }
  
  ngDoCheck() {
    this.logEvent('ngDoCheck');
  }

  ngAfterContentChecked() {
    this.logEvent('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.logEvent('ngAfterViewChecked');
  }

  onClick(){
    this.clickCounter++;
    this.logEvent('click detected');
  }
}
