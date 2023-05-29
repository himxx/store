import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent {
  @Output() showCategory: EventEmitter<string> = new EventEmitter();
  categories: string[] = ["shoes", "jeans"];

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
