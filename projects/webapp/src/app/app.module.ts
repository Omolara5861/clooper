import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClooperCommonModule } from '../../../clooper-common/src/lib/clooper-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClooperCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
