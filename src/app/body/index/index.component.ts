import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import {DataService} from '../../../app/service/data.service';
import {field} from '../../model/field';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  fields: field[];
  
    constructor(
      //private categoryService:IndexService, 
      private dataservice: DataService,
      private router: Router,
      meta: Meta, title: Title
    ) { this.router.events.subscribe(() => {
      title.setTitle('Edbird');
    });
    }
  
    ngOnInit() {
     this.dataservice.getfields().subscribe(fields =>{
      this.fields = fields;
      
    });
      
    }
 
}
