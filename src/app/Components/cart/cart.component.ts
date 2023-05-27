import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public products:any=[];
  grandTotal!:number;

  constructor(private cartservice:CartServiceService){}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((result:any)=>{
      this.products=result;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
  }

}
