import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  filter  = new BehaviorSubject<string>("");

  constructor( private http:HttpClient,) { }

  getproducts()               //get all products from fake json.api
  {                          
    return this.http.get(' https://fakestoreapi.com/products/');
  }


}
