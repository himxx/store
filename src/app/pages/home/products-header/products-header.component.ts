import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange:EventEmitter<number> = new EventEmitter();
  @Output() itemstCountChange:EventEmitter<number> = new EventEmitter();
  @Output() sortChange:EventEmitter<string> = new EventEmitter();
  sort: string = "desc";
  itemShowCount:number = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count:number):void {
    this.itemShowCount = count;
    this.itemstCountChange.emit(count);
  }

  onColumnsUpdated(columnNum:number):void {
    this.columnsCountChange.emit(columnNum);
  }
}
