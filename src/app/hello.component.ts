import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 *ngIf="isVisible()">Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  isVisible():boolean{
    console.log('cada segundo comprueba esto');
    return true;
  }
}
