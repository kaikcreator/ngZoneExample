import { Injectable, NgZone } from '@angular/core';
import { interval, BehaviorSubject} from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  private sessionDuration = new BehaviorSubject<string>(null);
  public changeSessionDuration$ = this.sessionDuration.asObservable();
  
  constructor(private ngZone:NgZone) { 
    this.checkSessionDuration();
  }

  checkSessionDuration(){
    this.ngZone.runOutsideAngular(()=>{
      interval(1000).subscribe(()=>{
          let duration = moment.duration(new Date(2020, 11, 24, 10, 33, 30, 0).getTime()-new Date().getTime(), 'seconds')
          this.sessionDuration.next(moment.utc(duration.asSeconds()).format('MM[months]:DD[d]:HH[h]:mm[m]:ss[s]'))
        });
    });
  } 
}
