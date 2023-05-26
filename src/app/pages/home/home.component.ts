import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
})
export class HomeComponent {
  cols:number = 3;

  onColumnCountChange(colsNumber:number) {
    this.cols = colsNumber;
  }
}
