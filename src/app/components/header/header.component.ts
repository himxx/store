import { Component, Input, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Cart, CartItem } from "src/app/models/Cart";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  cart: Cart = { items: [] };
  itemsQuantity = 0;
  cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
      this.itemsQuantity = cart.items
        .map((item) => item.quantity)
        .reduce((prev, current) => prev + current, 0);
    });
  }

  getTotalPrice(items:CartItem[]):number {
    return this.cartService.getTotalPrice(items);
  }

  clearCart():void {
    this.cartService.clearCart();
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}
