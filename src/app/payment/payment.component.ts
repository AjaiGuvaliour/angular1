import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit,AfterViewInit {
  ngAfterViewInit() {
    
  }

  constructor() { }

  @ViewChildren('items') items = QueryList;

  ngOnInit() {
  }

  
  openDiv(item: any){
    console.log(item)
  }
}
