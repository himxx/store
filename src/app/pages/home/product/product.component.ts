import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent {
  @Input() fullWithMode:boolean = false;
  @Input() product!:Product;

  @Output() addToCart:EventEmitter<Product> = new EventEmitter();

  onAddToCart():void {
    this.addToCart.emit(this.product);
  }
}
