import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @Input() label!: string;
  @Input() btnColor!: string;

  @Output() onClick = new EventEmitter<string>();


  buttonClicked() {
    this.onClick.emit("I am a reuseable Button!");
  }
}
