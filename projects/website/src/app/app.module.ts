import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClooperCommonModule } from 'projects/clooper-common/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClooperCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
