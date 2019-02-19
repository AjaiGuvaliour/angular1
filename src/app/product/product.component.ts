import { Component, OnInit } from '@angular/core';
import {product} from '../shared/sampleJSON/samplePro';
import {vedios} from '../shared/sampleJSON/vedio'
import { SharedServiceService } from '../shared/shared-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private sharedService: SharedServiceService) { }
  productList: any = [];
  vedioCarousel: any = [];
  ngOnInit() {
    this.productList=product;
    this.vedioCarousel=vedios;
  }

  cartList : any=[];

  addToCart(proDetails: any){
    this.cartList.push(proDetails);
    this.sharedService.addCartList(this.cartList);
  }

}
