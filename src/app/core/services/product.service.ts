import { Injectable } from '@angular/core';
import { PRODUCTS } from "@core/services/mock-products";
import { Products } from "@constants/common"

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() { }

  getProducts(): Products[] {
    return PRODUCTS
  }
}
