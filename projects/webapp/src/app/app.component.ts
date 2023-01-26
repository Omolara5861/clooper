import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';

  name:string = ''
  height!:number;
  weight!:number
  bmi!:number


  calcBMI() {
    this.bmi = Math.round((this.weight / this.height / this.height) * 703)
  };
}
