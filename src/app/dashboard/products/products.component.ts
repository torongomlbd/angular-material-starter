import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  users = [];

  userDetails: any;

  constructor(
    private service: DashboardService
  ) { }

  ngOnInit(): void {
    this.service.getUserList().subscribe(res => {
      this.users = res;
    });
  }
}
