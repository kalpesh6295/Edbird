import { Component, OnInit } from '@angular/core';

import { IndexModel } from './index.model';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [IndexService]
})
export class IndexComponent implements OnInit {
  categories:IndexModel[];
  
    constructor(
      private categoryService:IndexService
    ) { }
  
    ngOnInit() {
      this.categories=this.categoryService.categories;
    }
    openCategory(event:any){
      console.log(event)
    }
}
