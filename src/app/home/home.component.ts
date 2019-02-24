import { Component, OnInit } from '@angular/core';
import {product} from '../shared/sampleJSON/mainPro'
import { SharedServiceService } from '../shared/shared-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
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

  constructor(private sharedService : SharedServiceService,private toastr: ToastrManager,private router : Router){}
  ngOnInit() {
    this.productData=product;
  }

  
  addToCart(proDetails: any){
    var data = [proDetails];
    localStorage.setItem('selectedPro',JSON.stringify(data));
  this.router.navigate(['/shopping/selectedData']);
  }
}
