import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products-list/product';
import { ProductModel } from '../products-list/product-model';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input() model!: Product;
  @Output() deleteProduct = new EventEmitter<any>();
  @Output() createProduct = new EventEmitter<any>();
  @Input() productModel!: ProductModel;
  createProductModel!: ProductModel;
  productId!: string;
  
  name!: string;
  categoryIds!: string;
  photoPath!: any;

  constructor() { }
  ngOnInit() { }

  setCreateValue() {
    const modelProduct = {} as ProductModel;
    modelProduct.categoryId = this.categoryIds
    modelProduct.name = this.name
    modelProduct.photoPath = this.photoPath
    console.log("EMITGA KETDI")
    this.createProduct.emit(modelProduct);

  }

  setDeleteValue(id: any) {
    this.deleteProduct.emit(this.productId);
  }

}