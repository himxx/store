import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit {
  @Output() showCategory: EventEmitter<string> = new EventEmitter();
  categories!: Observable<string[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.categories = this.apiService.getAllCategories();
  }

  onShowCategory(category: string): void { 
    this.showCategory.emit(category);
  }
}
