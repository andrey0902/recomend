import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div class="not-found">
     <img src="../../assets/img/404.jpg" alt="">
    </div>
  `,
  styles: ['.not-found{ height: 100vh; } img{ display: block; margin: 20vh auto;}']
})
export class NoContentComponent {

}
