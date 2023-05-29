import { Component } from "@angular/core";
import { Product } from "src/app/models/Product";
import { CartService } from "src/app/services/cart.service";

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  constructor(private cartService: CartService) {}

  cols: number = 3;
  category!: string;
  rowHeight = ROW_HEIGHT[this.cols];

  onColumnCountChange(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  onShowCategory(category: any) {
    this.category = category;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id:product.id
    });
  }
}
