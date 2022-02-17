import { Component} from '@angular/core';

@Component({
  selector: 'app-success',
  template:`<div class="success">
    <p>
        in success component
    </p>
</div>`,
  styles: [`.success {
    background-color: lightgreen;
    color: darkgreen;
    height: 200px;
    width: 400px;
}`]
})
export class SuccessComponent{

  constructor() { }

}
