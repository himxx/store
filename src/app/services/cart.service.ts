import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/Cart";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  itemsQuantity = 0;

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
    this.snackBar.open("Item added to cart", "Ok", { duration: 3000 });
  }

  getTotalPrice(items: CartItem[]): number {
    return items
      .map((item) => {
        return item.price * item.quantity;
      })
      .reduce((prev, current) => prev + current, 0);
  }

  removeItemFromCart(itemToRemove: CartItem): CartItem[] {
    const items = this.cart.value.items.filter((item) => item.id !== itemToRemove.id);
    this.cart.next({ items });
    return items;
  }

  reduceQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }
      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeItemFromCart(itemForRemoval);
      this.cart.next({ items: filteredItems });
    }
    this.snackBar.open("1 item remove", "0k", { duration: 3000 });
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this.snackBar.open("Your cart is empty", "0k", { duration: 3000 });
  }
}
