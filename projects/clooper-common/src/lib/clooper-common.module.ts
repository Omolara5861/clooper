import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AccordionComponent } from './components/accordion/accordion.component';




@NgModule({
  declarations: [
  
    PaginationComponent,
       ButtonsComponent,
       AccordionComponent
  ],
  imports: [
  ],
  exports: [
  ]
})
export class ClooperCommonModule { }
