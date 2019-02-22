import { Component } from '@angular/core';
// import {baseURL} from '../environments/environment'
import {product} from './shared/sampleJSON/mainPro'
import { SharedServiceService } from './shared/shared-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
