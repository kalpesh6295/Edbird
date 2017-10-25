import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  count= false;  
  count1 = false;
  test= "menu";
  icon="menu-icon";
  @Output() counterChange : EventEmitter<string>;
  counter1Change : EventEmitter<string>;
     constructor(){
      this.counter1Change = new EventEmitter();
      
         this.counterChange = new EventEmitter();

     }
  @Input() 
     get counter(){
         return this.test; 
     }
     get counter1(){
       return this.icon;
     }
     increment(){

       if(this.count) {
         this.test = "menu"; 
         this.icon = "menu-icon";
         this.count=!this.count;
        }

       else{ 
         this.test="close";
         this.icon = "nav-icon";
       this.count=!this.count
      
      }
       this.counterChange.emit(this.test);
       this.counterChange.emit(this.icon);
     }
        
  
}
