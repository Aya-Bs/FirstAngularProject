import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }
  getListProductsFromBackend() : Observable<Product[]>{ 
    // type de retour asynchrone
    return this._http.get<Product[]>("http://localhost:3000/products");
    }
    getProductById(categoryId:number) : Observable<Product[]>{
      return this._http.get<Product[]>("http://localhost:3000/products?categoryId="+categoryId);
    }
}
