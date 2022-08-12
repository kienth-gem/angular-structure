import {Component, OnInit} from '@angular/core';
import {Products} from "@constants/common";
import {ProductService} from "@core/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Products[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts()
  }
}
