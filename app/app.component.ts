import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `{{title}}`
})
export class AppComponent {
  title = 'Helo World';
}