import { Component } from '@angular/core';

@Component({
  template: `
    <h3 class="errorMessage">This is not the page you are looking for</h3>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      text-align: center;
    }
  `]
})
export class PageNotFoundComponent { }
