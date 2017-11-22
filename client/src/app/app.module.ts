import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {SampleService} from './sample.service'


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
