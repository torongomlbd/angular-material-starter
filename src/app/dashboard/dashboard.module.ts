import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'products',
    component : ProductsComponent
  },
  {
    path: 'products/:id',
    component : ProductComponent
  },
];

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
