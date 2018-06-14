import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DateInputComponent } from './modules/date-input/date-input.component';
import { NgxMaskModule } from 'ngx-mask';
import { DateInputModule } from './modules/date-input/date-input.module';


@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [    
    BrowserModule,
    DateInputModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
