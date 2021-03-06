import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  cartList = new BehaviorSubject('');

  constructor() { }
  addCartList(data: any){
    console.log(data);
    this.cartList.next(data);
    return true;
  }
}
