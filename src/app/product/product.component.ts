import { Component, OnInit } from '@angular/core';
import {product} from '../shared/sampleJSON/samplePro';
import {vedios} from '../shared/sampleJSON/vedio'
import { SharedServiceService } from '../shared/shared-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private sharedService: SharedServiceService,private toastr: ToastrManager) { }
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
    this.product = [proDetails];
    this.popup = !this.popup;

  }

}
