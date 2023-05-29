import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/Cart";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private snackBar: MatSnackBar) {}

  addToCart(newItem: CartItem): void {
    const items: CartItem[] = [...this.cart.value.items];

    const itemFind: CartItem | undefined = items.find(
      (item) => item.id === newItem.id
    );

    if (itemFind) {
      itemFind.quantity += 1;
    } else {
      items.push(newItem);
    }

    this.cart.next({ items: items });
    this.snackBar.open('Item added to cart', 'Ok', {duration:3000 })
  }
}
