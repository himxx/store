import { DataSource } from "@angular/cdk/collections";
import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/Cart";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
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

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotalPrice(items:CartItem[]):number {
    return items.map(item => {
     return item.price * item.quantity
    }).reduce((prev, current) => prev + current, 0 )
  }

  getTotal(element:any):number {
    return element.price * element.quantity;
  }


}
