import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  clicked = false;
  side_menu_class = "side-menu-hide";
  menu_icon_class = "menu-icon";
  menu_status = "menu";

    click_status(){
      if(this.clicked) {
        this.menu_status = "close"; 
        this.side_menu_class = "side-menu-show";
        this.menu_icon_class = "nav-icon";
        this.clicked=!this.clicked;
       }

      else{ 
        this.menu_status="menu";
        this.menu_icon_class = "menu-icon";
        this.side_menu_class = "side-menu-hide";
        this.clicked=!this.clicked;      
     }
             

    }
        
  }
