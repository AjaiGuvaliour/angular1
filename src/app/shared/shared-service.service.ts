import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  cartList = new BehaviorSubject([]);

  constructor() { }

  addCartList(data: any){
    this.cartList.next(data);
  }
}
