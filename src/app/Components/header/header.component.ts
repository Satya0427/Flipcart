import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService} from 'src/app/services/httpservice.service';
import { CartServiceService } from 'src/app/services/cart-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 filterterm!:string;
 totalItems!:number;
 

  constructor(private route:Router, private httpservice:HttpserviceService, private cartservice:CartServiceService){}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res)=>{
      this.totalItems=res.length;
    })
  }

  opencart(){
    this.route.navigate(['/cart/'])
  }

  search(event:any){
    this.filterterm = (event.target as HTMLInputElement).value;
    this.httpservice.filter.next(this.filterterm);
  }



}
