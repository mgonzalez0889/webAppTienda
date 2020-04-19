import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';



const routes: Routes = [
  {
    path: '', //  /products
    component: ProductsComponent,
    children: [ // /products/list,  products/edit,  products/add
      {
        path: '', // products  -> products/list
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list', //  products   -> / products/list
        component: ProductListComponent
      },
      {
        path: 'add', // /products/add
        component: ProductAddComponent
      }

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
