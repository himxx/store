import { DataSource } from "@angular/cdk/collections";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Cart, CartItem } from "src/app/models/Cart";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit, OnDestroy {
  cartSubscription!: Subscription;
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/159",
        name: "Snickers",
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/159",
        name: "Snickers",
        price: 250,
        quantity: 11,
        id: 2,
      },
    ],
  };

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((cart) => {
      this.dataSource = cart.items;
      this.cart = cart;
    });
  }

  getTotal(element: any): number {
    return element.price * element.quantity;
  }

  getTotalPrice(items: CartItem[]): number {
    return this.cartService.getTotalPrice(items);
  }

  removeItemFromCart(item:CartItem) {
    this.cartService.removeItemFromCart(item);
  }

  clearCart():void {
    this.cartService.clearCart();
  }

  addQuantity(item:CartItem):void {
    this.cartService.addToCart(item);
  }

  reduceQuantity(item:CartItem):void {
    this.cartService.reduceQuantity(item);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}
