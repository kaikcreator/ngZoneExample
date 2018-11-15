import {Component, OnInit } from '@angular/core';
import { CountdownService } from './countdown.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.html',
})
export class CountDownComponent implements OnInit{
  private countdownSubscription:Subscription = null;
  private seconds:number = 10;
  public sessionDuration:string = "00:00";

  constructor(private countdownService:CountdownService){}

  ngOnInit(){
    //start counter on component init
    this.resetCounter();
  }

  ngOnDestroy(){
    //clear counter on component destroy
    this.clearCounter();   
  }

  public resetCounter(){
    //when resetting counter, first clear previous subscription
    this.clearCounter();
    //then subscribe to countdown service
    this.countdownSubscription = this.countdownService.startCountdown(this.seconds)
    .subscribe(value =>{
      //and update the value displayed on the template
      this.sessionDuration = value;
    });
  }

  private clearCounter(){
    if(this.countdownSubscription){
      this.countdownSubscription.unsubscribe();
    }
  }

}