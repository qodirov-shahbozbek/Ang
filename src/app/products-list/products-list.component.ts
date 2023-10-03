import { Component, Input, OnInit } from '@angular/core';
import { ProductListServiceService } from '../services/productListService/product-list-service.service';
import { Product } from './product';
import { ProductModel } from './product-model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  productId!: string;
  searchText!: string;
  productModel!: ProductModel;

  constructor(private productListService: ProductListServiceService) {

  }
  ngOnInit() {
    this.reloadProductsList()
  }

  reloadProductsList() {
    this.productListService.getAllProductsList().subscribe({
      next: (d: any) => {
        this.products = d;
      }
    })
  }

  searchProduct(data: any) {
    this.searchText = data;
    this.productListService.searchProductList(this.searchText).subscribe({
      next: (d: any) => {
        this.products = d;

        if (d.length <= 0) {
          alert("Product not found");
        }
      }
    });
  }

  deleteProduct(product: any) {
    this.productListService.deleteProduct(product.id).subscribe({
      next: (res: any) => {
        this.reloadProductsList();
      }
    });
  }

  createProducts(productModel: any) {
    console.log("1")
    console.log(productModel)
    productModel.name = this.productModel.name;
    productModel.categoryId = this.productModel.categoryId;
    productModel.photoPath = this.productModel.photoPath;
    this.productListService.createProduct(productModel).subscribe({
      next: (res: any) => {
        this.reloadProductsList();
      }
    })
  }

  newEmit() {
    console.log("data")
  }
}
