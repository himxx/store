import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/Product";
import { ApiService } from "src/app/services/api.service";
import { CartService } from "src/app/services/cart.service";

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private apiService: ApiService
  ) {}

  products!: Observable<Product[]>;
  count = 12;
  sort = 'desc';
  cols: number = 3;
  category!: string;
  rowHeight = ROW_HEIGHT[this.cols];
  

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts():void {
    this.products = this.apiService.getAllProducts(this.count, this.sort, this.category);

  }

  onItemsCountChange(count:number):void {
    this.count = count;
    this.getAllProducts();
    
  }

  onSortChange(sort:string) {
    this.sort = sort;
    this.getAllProducts();
  }

  onColumnCountChange(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  onShowCategory(category: string) {
    console.log('dasdas');
    
    this.category = category;
    this.getAllProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
