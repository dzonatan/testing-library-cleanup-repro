import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<h1>My title</h1>',
  host: {
    '[attr.id]': 'null' // this breaks the cleaning up of tests
  }
})
export class AppComponent { }
