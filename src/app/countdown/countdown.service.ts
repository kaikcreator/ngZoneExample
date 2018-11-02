import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  private initTime = null;
  
  constructor() { 
  }

  public startCountdown(seconds){
    this.initTime = moment(Date.now() + (seconds+1)*1000);
    return interval(1000).pipe(
      take(seconds),
      map(()=>{
        let diff = this.initTime.diff(moment());
        let countdown = moment.utc(diff).format('mm:ss');
        console.log("current countdown: ", countdown);
        return countdown;
      })
    );
  }
}
