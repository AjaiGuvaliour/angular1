import { Component, OnInit } from '@angular/core';
import {product} from '../shared/sampleJSON/mainPro'
import { SharedServiceService } from '../shared/shared-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedProduct: any ;
  popup: boolean = false;
  productData: any = [];
  product : any = [];
  cartList: any = [];

  constructor(private sharedService : SharedServiceService,private toastr: ToastrManager){}
  ngOnInit() {
    this.productData=product;
  }

  
  addToCart(proDetails: any){
   proDetails['qty']=1;
     var data = this.sharedService.addCartList(proDetails);
     if(data){
         this.toastr.successToastr('suucessFully Added To Cart');
       }
  }
}
