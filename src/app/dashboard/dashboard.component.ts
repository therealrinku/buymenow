import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  assets=[{
    assetName:"BTC",holdings:25.56,pricePerCoin:20000
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
