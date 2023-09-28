import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { OrderComponent } from './order/order.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CategoryComponent } from './category/category.component';
import { ProductItemsComponent } from './product-items/product-items.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsListComponent },
  { path: "orders", component: OrderComponent },
  { path: "categories", component: CategoryComponent},
  { path: "product", component: ProductItemsComponent},
  { path: "", component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
