import { Component, OnInit, ElementRef ,ViewChildren, QueryList} from '@angular/core';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

  sideBarToggle(){
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active')
  }

  sideMenuToggle(event: any){
    event.preventDefault();
    event.stopPropagation();
    if(event.target.tagName=='A'){
        event.target.nextElementSibling.classList.toggle("sidenavHeight")
    } 
    else if(event.target.tagName=='I'){
      event.target.parentElement.nextElementSibling.classList.toggle("sidenavHeight")

    }
  }

}
