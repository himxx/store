import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent {
  @Input() fullWithMode:boolean = false;
  product:Product | undefined = {
    id:1,
    title:'Snickers',
    price:150,
    category:'shoes',
    description:'Super',
    image:'https://via.placeholder.com/150'
  }

  @Output() addToCart:EventEmitter<Product> = new EventEmitter();

  onAddToCart():void {
    this.addToCart.emit(this.product);
  }
}
