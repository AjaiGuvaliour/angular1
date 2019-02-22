import { Component, OnInit ,Input } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SharedServiceService } from '../shared/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent implements OnInit {
  
  SelectedProduct = JSON.parse(localStorage.getItem('selectedPro'));
  product: any = {};
  cartList: any=[];
  constructor(private router : Router,private toastr: ToastrManager,private sharedService : SharedServiceService) { }
  total:any;
  ngOnInit() {
    if(this.SelectedProduct){
    this.product =this.SelectedProduct[0];
    this.total = this.product.regular_price;}
  }

  calculation(){
    var quantity,price;
    price = document.getElementById('regularPrice').innerHTML;
    quantity = document.getElementById('quantity')['value'];
    if(parseInt(quantity) >=1){
    this.total = parseInt(price) * parseInt(quantity);
    }
    else{
       this.total = parseInt(price);
    }
  }

  addToCart(proDetails: any,total: any){   
    proDetails['qty']=document.getElementById('quantity')['value'];;
    this.sharedService.addCartList(proDetails);
    this.toastr.successToastr('suucessFully Added To Cart');
    this.router.navigate(['/'])
  }

}
