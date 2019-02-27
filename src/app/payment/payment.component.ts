import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { SharedServiceService } from '../shared/shared-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit,AfterViewInit {


  constructor(private service: SharedServiceService) { }
  dataLoded = false;
  cartListData: any = [];
  
  ngOnInit() {

  var cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  this.cartListData=cartList;
  this.dataLoded = true;
  this.total();
  }
  

  ngAfterViewInit(){
    this.total()
  }

  deleteSelectedItem(id:any,pro: any){
    document.getElementById(id).remove();
    this.cartListData.splice(pro,1);
    localStorage.setItem('cartList',JSON.stringify(this.cartListData)) 
    this.total();
    this.service.addCartList(this.cartListData.length);
  }

  calculation(pro: any,event){
    var data=parseInt(this.cartListData[pro]['regular_price']) *  parseInt(event.target.value);
    document.getElementById("product"+pro).innerHTML =(parseInt(event.target.value) >=1) ?  String(data) : this.cartListData[pro]['regular_price'];
    this.total();
  }

 

  total(){
    var total= document.getElementsByClassName('subtotal');
    if(total){
    var sum=0;
    for(var i =0;i<total.length;i++){
       sum= sum + parseInt(total[i].innerHTML);
    }
    document.getElementById('Total').innerHTML=String(sum);
  }}
}
