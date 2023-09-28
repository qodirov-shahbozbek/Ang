import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from 'src/app/products-list/product';
import { ProductModel } from 'src/app/products-list/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {

  private ProductsUrl = 'https://localhost:7022/api/Products'
  
  constructor(private http: HttpClient) { }

  getAllProductsList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.ProductsUrl}`);
  }

  searchProductList(searchText: string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.ProductsUrl}/${searchText}`);
  }

  updateProduct(productModel: ProductModel): Observable<any>{
    return this.http.put(`${this.ProductsUrl}`, productModel);
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete<any>(`${this.ProductsUrl}/${id}`);
  }

  createProduct(productModel: ProductModel): Observable<any>{
    return this.http.post<any>(`${this.ProductsUrl}`,productModel);
  }
}