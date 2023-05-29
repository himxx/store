import { Component } from "@angular/core";

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols: number = 3;
  category!: string;
  rowHeight = ROW_HEIGHT[this.cols]

  onColumnCountChange(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROW_HEIGHT[this.cols]
    
  }

  onShowCategory(category: any) {
    this.category = category;
  }

  onAddToCart():void {
    
  }
}
