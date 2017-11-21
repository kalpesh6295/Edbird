import { Component, OnInit, DoCheck } from '@angular/core';
import { InsightService } from './insights.service';
import { Insight } from './insights.model';
import { insight } from '../../../model/Field';
import { DataService } from '../../../service/data.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router';
import { AfterContentChecked, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css'],
  providers: [InsightService]
})
export class InsightsComponent implements OnInit, AfterContentInit {
  fieldname: string;
  alength:number;
  profession:string;
  fulllink:string;
  insights: insight[];
  
  constructor(
    //private categoryService:IndexService, 
    private dataservice: DataService,
    private router: Router
  //  private route : ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
   // this.categories=this.categoryService.categories;
  // this.fieldname =this.route.snapshot.params[':name'];
  this.fulllink=decodeURIComponent(this.router.url);
  this.alength=this.fulllink.length;
  this.profession=this.fulllink.substring(12,this.alength-9);
console.log(this.profession);
   this.dataservice.getinsights(this.profession).subscribe(insights =>{
   
    this.insights=insights;
    
  });
    
  }
  ngAfterContentInit(){
    this.fulllink=decodeURIComponent(this.router.url);
    this.alength=this.fulllink.length;
    this.profession=this.fulllink.substring(12,this.alength-9);
  console.log(this.profession);
    this.dataservice.getinsights(this.profession).subscribe(insights =>{
      
      //console.log(fields);
      this.insights=insights;
      
  });
}

}