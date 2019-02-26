import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  switchPage(event: any){
     if(event.target.id == 'login-form-link'){
        document.getElementById('login-form').style.display='block';
        document.getElementById('register-form').style.display='none';
     }
     else{
      document.getElementById('login-form').style.display='none';
      document.getElementById('register-form').style.display='block';
     }
  }

  loggedIn(){
    console.log('logged')
    var cartLength = JSON.parse(localStorage.getItem('cartList')).length;
    if(cartLength){
          this.router.navigate(['/shopping/payment'])
    }
    else{
      this.router.navigate(['/home'])
    }
  }

}
