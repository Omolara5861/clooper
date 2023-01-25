import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';




@NgModule({
  declarations: [
  
    PaginationComponent,
       ButtonsComponent,
       AccordionComponent,
       FullnamePipe,
       FullNamePipe
  ],
  imports: [
  ],
  exports: [
  ]
})
export class ClooperCommonModule { }
