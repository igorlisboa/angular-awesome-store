import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  @Input() product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!'); 
  }

}