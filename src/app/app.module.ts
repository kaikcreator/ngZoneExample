import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountDownComponent } from './countdown/countdown';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CountDownComponent, ItemComponent, HeaderComponent ],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
