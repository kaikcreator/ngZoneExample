import {Component, Renderer2, ViewChild, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountdownService } from './countdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.html',
})
export class CountDownComponent implements OnInit, OnChanges{
  @Input() seconds:number = null;
  @Input() minutes:number = null;
  @ViewChild('sessionDuration') durationElement:ElementRef;
  private countdownSubscription:Subscription = null;

  constructor(private renderer:Renderer2, private countdownService:CountdownService){}

  ngOnInit(){
  }

  ngOnChanges(changes){
    console.log("changes are: ", changes);
    if(changes.seconds){
      if(changes.seconds.currentValue != changes.seconds.previousValue){
        this.resetCounter();
      }
    }
  }

  private resetCounter(){
    if(this.countdownSubscription){
      this.countdownSubscription.unsubscribe();
    }
    this.countdownSubscription = this.countdownService.startCountdown(this.seconds).subscribe(value =>{
      this.renderer.setProperty(this.durationElement.nativeElement, 'innerHTML', value);
    });
  }

}