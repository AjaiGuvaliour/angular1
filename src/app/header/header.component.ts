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
  ngOnInit() {
      this.sharedService.cartList.subscribe(data=>{
        if(data){
          this.dataList(data);
        }
      })
  }
  countList: any={};
  dataList(data: any){
    this.cartData=data;
    function filterArr(dat, key){
      return dat.reduce( (result, current) => {
        if(!result[current[key]]){
          result[current[key]] = 1;
        } else {
          result[current[key]] += 1;
        }
        return result;    
      }, {})
    }
    this.countList=filterArr(this.cartData,'product_name');

  }

}
