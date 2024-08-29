import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl : string = 'https://localhost:7003/api';
  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<Product[]>{
   return this.http.get<Product[]>(this.baseApiUrl + '/Products')
  }
  //empty guid for new product  id 
  //sample guid: 00000000-0000-0000-0000-000000000000

  addProduct(newProduct: Product): Observable<Product>{
    newProduct.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseApiUrl + '/Products', newProduct)
  }

  getProduct(Id: string): Observable<Product>{
    return this.http.get<Product>(this.baseApiUrl + '/Products/' + Id)
  }

  updateProduct(id: string, updateProductRequest: Product): Observable<Product>{
    return this.http.put<Product>(this.baseApiUrl + '/Products/' + id, updateProductRequest)
  }

  deleteProduct(id: string): Observable<Product>{
    return this.http.delete<Product>(this.baseApiUrl + '/Products/' + id)
  }
}
