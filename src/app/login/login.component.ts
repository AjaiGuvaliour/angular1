import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

}
