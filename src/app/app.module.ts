import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CategoryComponent } from './category/category.component';
import { CatogoryListComponent } from './catogory-list/catogory-list.component';
import { BranchComponent } from './branch/branch.component';
import { OrderComponent } from './order/order.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductItemsComponent } from './product-items/product-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CategoryComponent,
    CatogoryListComponent,
    BranchComponent,
    OrderComponent,
    OrdersListComponent,
    SignInComponent,
    HeaderComponent,
    HomeComponent,
    ProductItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
