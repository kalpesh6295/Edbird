import { Component, OnInit, DoCheck } from '@angular/core';
import { InsightService } from './insights.service';
import { Insight } from './insights.model';
import { insight } from '../../../model/Field';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css'],
  providers: [InsightService]
})
export class InsightsComponent implements OnInit{
  fieldname: string;
  alength:number;
  profession:string;
  fulllink:string;
  insights: insight[];
  
  constructor(
    private dataservice: DataService,
    private router: Router,
    meta: Meta, title: Title        

    

  ) { this.router.events.subscribe(() => {
    this.fulllink=decodeURIComponent(this.router.url);
    this.alength=this.fulllink.length;
    this.profession=this.fulllink.substring(12,this.alength-9);
    
    this.dataservice.getinsights(this.profession).subscribe(insights =>{
      this.insights=insights; 
    });
});
   title.setTitle(decodeURIComponent(this.router.url).substring(12,decodeURIComponent(this.router.url).length-9)) ;
  }

  ngOnInit() {
    
  }
 
}