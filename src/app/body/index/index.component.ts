import { Component, OnInit } from '@angular/core';

import { IndexModel } from './index.model';
import { IndexService } from './index.service';
import {DataService} from '../../../app/service/data.service';
import {field} from '../../../app/model/field';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [IndexService]
})
export class IndexComponent implements OnInit {
  //categories:IndexModel[];
  fields: field[];
  
    constructor(
      //private categoryService:IndexService, 
      private dataservice: DataService
    ) { 
      
    }
  
    ngOnInit() {
     // this.categories=this.categoryService.categories;
     this.dataservice.getfields().subscribe(fields =>{
      console.log(fields);
      this.fields = fields;
      
    });
      
    }
    //openCategory(event:any){
     // console.log(event)
  //  }
 
}
