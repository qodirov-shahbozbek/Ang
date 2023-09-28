import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products-list/product';
import { ProductModel } from '../products-list/product-model';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit{
@Input() model!: Product;
@Output() deleteProduct =  new EventEmitter<any>();
@Output() createProduct = new EventEmitter<any>();
@Input() productModel!: ProductModel;
createProductModel!:  ProductModel;
productId!: string;
photoPath!: any;

constructor(){}
ngOnInit(){}

setCreateValue(){
  this.createProduct.emit(this.createProductModel);
  console.log(this.createProductModel);

}

setDeleteValue(id: any){  
  this.deleteProduct.emit(this.productId);
}

}