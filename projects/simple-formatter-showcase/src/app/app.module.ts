import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleFormatterModule } from 'projects/simple-formatter/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleFormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
