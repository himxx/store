import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private API_URL = "https://fakestoreapi.com";

  constructor(private http: HttpClient) {}

  getAllProducts(
    limit = 12,
    sort = "desc",
    category?: string
  ): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.API_URL}/products${
        category ? "/category/" + category : ""
      }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/products/categories`);
  }
}
