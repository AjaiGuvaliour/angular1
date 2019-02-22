import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedServiceService) { }
   cartData : any = [];
   cartD : boolean = false;
  ngOnInit() {
      this.sharedService.cartList.subscribe(data=>{
        if(data){
          this.dataList(data);
        }
      })
  }
  countList: any={};
  dataList(data: any){
   this.cartData.push(data)
   console.log()
  }

  displayDetails(){

    this.cartD= !this.cartD;

    var response=[];
    this.cartData.reduce(function (res, value) {
    if (!res[value.id]) {
        res[value.id] = {
            qty: 0,
            Id: value.id
        };
        response.push(res)
    }
        res[value.id].qty += value.qty
        return res;
}, {});
    console.log(response)
  }

}
