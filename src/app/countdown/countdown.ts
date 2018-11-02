import {Component, Renderer2, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { CountdownService } from './countdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.html',
})
export class CountDownComponent implements OnInit{
  @ViewChild('sessionDuration') durationElement:ElementRef;
  private countdownSubscription:Subscription = null;
  private seconds:number = 10;

  constructor(private renderer:Renderer2, private countdownService:CountdownService, private ngZone:NgZone){}

  ngOnInit(){
    this.resetCounter();
  }

  ngOnDestroy(){
    this.clearCounter();   
  }

  public resetCounter(){
    this.clearCounter();
    //this.ngZone.runOutsideAngular(()=>{
      this.countdownSubscription = this.countdownService.startCountdown(this.seconds).subscribe(value =>{
        this.renderer.setProperty(this.durationElement.nativeElement, 'innerHTML', value);
      });
    //});
  }

  private clearCounter(){
    if(this.countdownSubscription){
      this.countdownSubscription.unsubscribe();
    }
  }

}