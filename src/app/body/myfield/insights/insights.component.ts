import { Component, OnInit, DoCheck } from '@angular/core';
import { InsightService } from './insights.service';
import { Insight } from './insights.model';
import { insight } from '../../../model/Field';
import { DataService } from '../../../service/data.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { AfterContentChecked, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css'],
  providers: [InsightService]
})
export class InsightsComponent implements OnInit, AfterContentInit {
  fieldname: string;
  
  insights: insight[];
  
  constructor(
    //private categoryService:IndexService, 
    private dataservice: DataService,
  //  private route : ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
   // this.categories=this.categoryService.categories;
  // this.fieldname =this.route.snapshot.params[':name'];
   this.dataservice.getinsights().subscribe(insights =>{
    //console.log(fields);
    this.insights=insights;
  });
    
  }
  ngAfterContentInit(){
    this.dataservice.getinsights().subscribe(insights =>{
      //console.log(fields);
      this.insights=insights;
  });
}
}