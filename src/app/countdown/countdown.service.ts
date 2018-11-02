import { Injectable, NgZone } from '@angular/core';
import { interval, BehaviorSubject} from 'rxjs';
import { share } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  private initTime = null;
  private sessionDuration = new BehaviorSubject<string>(null);
  public changeSessionDuration$ = this.sessionDuration.asObservable();
  
  constructor(private ngZone:NgZone) { 
  }

  public startCountdown(seconds){
    this.initTime = moment(Date.now() + seconds*1000);
    this.checkSessionDuration();
    return this.changeSessionDuration$;
  }

  checkSessionDuration(){
    this.ngZone.runOutsideAngular(()=>{
      interval(1000).subscribe(()=>{
        let duration = moment.utc(this.initTime.diff(moment()));
        this.sessionDuration.next(duration.format('mm:ss'));
        console.log("timer executed");
      });
    });
  } 
}
