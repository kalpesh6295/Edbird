import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  count= true;  
  test= "";
  @Output() counterChange : EventEmitter<string>;
     constructor(){
        
         this.counterChange = new EventEmitter();

     }
  @Input() 
     get counter(){
         return this.test; 
     }
     increment(){

       if(this.count) {this.test = "side-menu-show"; this.count=!this.count}
       else{ this.test="side-menu-hide";this.count=!this.count}
       this.counterChange.emit(this.test);
     }
        
        
  }

