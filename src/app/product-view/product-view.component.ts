import { Component, OnInit } from '@angular/core';
import {overAllproduct} from '../shared/sampleJSON/overallPro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  constructor(private router : Router) { }
  overallPro : any = [];
  itemPerPage = 9;
  p: number = 1;  
  dropdownSelect = 10;
  ListItems =[10,15,20]
  ngOnInit() {
    this.overallPro=overAllproduct;
  }

  dropDown(){
    var value= event.target['value'];
    this.itemPerPage = value;
  }
  addToCart(proDetails: any){
    var data = [proDetails];
     localStorage.setItem('selectedPro',JSON.stringify(data));
    this.router.navigate(['/shopping/selectedData']);
  }
}
