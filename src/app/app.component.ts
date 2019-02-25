import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from './shared/shared-service.service';
// import {baseURL} from '../environments/environment'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private service: SharedServiceService){}
  ngOnInit(){
    window.onscroll = function() {scrollFunction()};
    this.service.addCartList(JSON.parse(localStorage.getItem('cartList')).length);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
}
topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
