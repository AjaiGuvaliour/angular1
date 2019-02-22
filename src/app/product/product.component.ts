import { Component, OnInit } from '@angular/core';
import {product} from '../shared/sampleJSON/samplePro';
import {vedios} from '../shared/sampleJSON/vedio'
import { SharedServiceService } from '../shared/shared-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router,private sharedService: SharedServiceService,private toastr: ToastrManager) { }
  productList: any = [];
  product: any = [];
  vedioCarousel: any = [];
  popup: boolean = false;
  ngOnInit() {
    this.productList=product;
    this.vedioCarousel=vedios;
  }

  cartList : any=[];

  addToCart(proDetails: any){
    var data = [proDetails];
     localStorage.setItem('selectedPro',JSON.stringify(data));
    this.router.navigate(['/shopping/selectedData']);
  }

}
