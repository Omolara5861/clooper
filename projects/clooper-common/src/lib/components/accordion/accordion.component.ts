import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() headerText!: string;
  @Input() bodyText!: string;
  @Input() accordionColor!: string;

  isAccordionOpen = true;
}
