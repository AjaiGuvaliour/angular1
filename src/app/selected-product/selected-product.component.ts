import { Component, OnInit ,Input } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SharedServiceService } from '../shared/shared-service.service';
import { Router } from '@angular/router';
import {product} from '../shared/sampleJSON/samplePro';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent implements OnInit {
  
  SelectedProduct = JSON.parse(localStorage.getItem('selectedPro'));
  product: any = {};
  productList=[];
  selected_Color:any;
  cartList: any=[];
  autoSelectedImage: any;
  colored: boolean= false;
  constructor(private router : Router,private toastr: ToastrManager,private sharedService : SharedServiceService) { }
  total:any;
  colors=[
    'red','blue','black'
  ]
  ngOnInit() {
    if(this.SelectedProduct){
    this.product =this.SelectedProduct[0];
    this.total = this.product.regular_price;
   }
   this.productList=product;
   this.autoSelectedImage= this.productList[0].img;
  }
  selectedColor(evant: any){
    var value = event.target['value'];
    event.target['style'].backgroundColor=value;
    (value) ? this.colored= true :  this.colored=false;
    
  }
  calculation(){
    var quantity,price;
    price = document.getElementById('regularPrice').innerHTML;
    quantity = document.getElementById('quantity')['value'];
    console.log(price,quantity)
    if(parseInt(quantity) >=1){
    this.total = parseInt(price) * parseInt(quantity);
    }
    else{
       this.total = parseInt(price);
    }
    console.log(this.total)
  }

  addToCart(proDetails: any,total: any){ 
    console.log(proDetails)  
    proDetails['qty']=document.getElementById('quantity')['value'];;
    var cartList = JSON.parse(localStorage.getItem("cartList")) || [];
    cartList.push(proDetails);
    var filteredData = [];
    for(var i=0;i<cartList.length;i++){
    for(var j= i+1;j<cartList.length;j++){
        if(cartList[i]['id']==cartList[j]['id']){    
        cartList[i]['qty']= parseInt(cartList[i]['qty'])+ parseInt(cartList[j]['qty']);
        cartList[j]=[];
       }
     }
     if(cartList[i]['id']){ 
       cartList[i]['subTotal']= parseInt(cartList[i]['qty']) * parseInt(cartList[i]['regular_price']);
       filteredData.push(cartList[i])
    }
    }
    localStorage.setItem("cartList",JSON.stringify(filteredData))
    this.sharedService.addCartList(filteredData.length);
    this.toastr.successToastr('suucessFully Added To Cart');
    this.router.navigate(['/'])
  }

  autoImageChange(image: any){
  this.autoSelectedImage=image;
  }

}
