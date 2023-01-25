import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';

  message = '';

  onShowMessage(event: string) {
    console.log(event);
    this.message = 'Hello, Admin! You just clicked the reusable button'
  }
}

