import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor() { }
  dataLoded = false;
  cartListData: any = [];
  
  ngOnInit() {

  var cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  this.cartListData=cartList;
  this.dataLoded = true;

  }

  deleteSelectedItem(pro: any){
    this.cartListData.splice(pro,1);
    localStorage.setItem('cartList',JSON.stringify(this.cartListData)) 
  }

  calculation(pro: any,event){
    var data=parseInt(this.cartListData[pro]['regular_price']) *  parseInt(event.target.value);
    document.getElementById("product"+pro).innerHTML =(parseInt(event.target.value) >=1) ?  String(data) : this.cartListData[pro]['regular_price'];
    var total= document.getElementsByClassName('subtotal');
    var sum=0;
    for(var i =0;i<total.length;i++){
       sum= sum + parseInt(total[i].innerHTML);
    }
    document.getElementById('Total1').innerHTML=String(sum);
    document.getElementById('Total').innerHTML=String(sum);

  }

}
