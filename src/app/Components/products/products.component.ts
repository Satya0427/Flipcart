import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { HttpserviceService } from 'src/app/services/httpservice.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  filterterm:string='';
  filterCategory:any;

  constructor(private service:HttpserviceService, private cartservice:CartServiceService, private httpservice:HttpserviceService){}

ngOnInit(): void {
  this.service.getproducts().subscribe((result)=>{
    this.products=result;
    this.filterCategory=result;
    this.products.forEach((a:any) => {
      if(a.category ==="women's clothing" || a.category ==="men's clothing"){
        a.category ="fashion"
      }
      Object.assign(a,{quantity:1,total:a.price});
    }); 
  })
  this.httpservice.filter.subscribe((value:any)=>{
    this.filterterm=value;
  })
}
addtoCart(product:any){
  this.cartservice.addCart(product);
  alert("added successfully")
}

filter(category:string){
  this.filterCategory = this.products
  .filter((a:any)=>{
    if(a.category == category || category==''){
      return a;
    }
  })
}
}
