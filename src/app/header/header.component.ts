import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedServiceService } from '../shared/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy{

  constructor(private sharedService: SharedServiceService) { }
   cartData : any = [];
   cartD : boolean = false;
   subscription: Subscription
  ngOnInit() {
    this.subscription=  this.sharedService.cartList.subscribe(data=>{
        if(data){
          this.dataList(data);
        }
      })
  }
  countList: any={};
  dataList(data: any){
   this.cartData=data;
  }

  displayDetails(){

    this.cartD= !this.cartD;

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
