import { Component, OnInit } from '@angular/core';
import {product} from '../shared/sampleJSON/samplePro';
import {vedios} from '../shared/sampleJSON/vedio'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  productList: any = [];
  vedioCarousel: any = [];
  ngOnInit() {
    this.productList=product;
    this.vedioCarousel=vedios;
  }

  addToCart(proDetails: any){
    console.log(proDetails);
  }

}
