import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItemList:any=[];
  product:any;
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  addCart(item:any){
    this.cartItemList.push(item);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  
  getProducts(){
    return this.productList;
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
}