import {Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CountdownService } from './countdown.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.html',
})
export class CountDownComponent implements OnInit{
  @ViewChild('sessionDuration') durationElement:ElementRef;

  public sessionDuration = null;

  constructor(private renderer:Renderer2, private countdownService:CountdownService){}

  ngOnInit(){
    this.countdownService.changeSessionDuration$.subscribe(value =>{
      this.renderer.setProperty(this.durationElement.nativeElement, 'innerHTML', value);
    })
  }

}