import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get('productId'));
    this.product = products.find((product) => product.id == productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
    window.alert("This item has been added into cart");
  }
}
