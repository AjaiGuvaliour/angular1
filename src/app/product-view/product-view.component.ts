import { Component, OnInit } from '@angular/core';
import {overAllproduct} from '../shared/sampleJSON/overallPro';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  overallPro : any = [];
  myForm: FormGroup;
  popup: boolean = false;
  resetData: any = [];
  itemPerPage = 9;
  p: number = 1;  
  fiterdata: any = [];
  dropdownSelect = 10;
  ListItems =[10,15,20]
  constructor(private router : Router,private formBuilder : FormBuilder) {
    this.myForm = this.formBuilder.group({
      // name : [''],
      type : ['']
    })
   }

  ngOnInit() {
    this.overallPro=overAllproduct;;
    this.fiterdata = overAllproduct.slice(0);
    this.resetData = overAllproduct.slice(0)
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

  searchFilter(form : any){
    var filterFields = this.fiterdata[0];
    var items = this.fiterdata;
    if (items.length && items) {
      var filldata = items.filter(item => {
        for (let prop in filterFields) {
           if(prop == 'type'){
             if(form[prop] && item[prop] && item[prop].toLowerCase().indexOf(form[prop].toLowerCase())===-1){
                return false;
             }
             return true;
           }
        }
      })
       this.overallPro = filldata;
    }
  }
  reset(){
    this.overallPro = this.resetData;
    this.myForm.reset();

  }
}

// filters =this.simp;
// if(data.empid.toString() !=''&& data.empid.toString() !=null && data.empid.toString() !=""){
// filters = filters.filter((item)=>{
// if ((this.empid.toString() !='' &&
//   item.empid.toString().indexOf(data.empid.toString()) > -1))
//   {
//     return true;
// }
// })
// }
// this.simp1=filters;
// }







