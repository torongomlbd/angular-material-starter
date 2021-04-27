import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  user: any;
  userId: any;

  constructor(
    private service: DashboardService,
    protected router: Router,
    private route: ActivatedRoute,
  ) {
    this.userId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }
  ngOnInit(): void {
    this.service.getUser(this.userId).subscribe(res => {
      this.user = res;
    })
  }

}
