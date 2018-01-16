import { Component, OnInit, Input } from '@angular/core';
import { ContentModel } from './content.model';
import { ContentService } from './content.service';
import { insight } from '../../../../../model/Field';
import { DataService } from '../../../../../service/data.service';
import { Router } from '@angular/router';

import { content } from '../../../../../model/Field';
import * as $ from 'jquery';
@Component({
  selector: 'app-insideinsight',
  templateUrl: './insideinsight.component.html',
  styleUrls: ['./insideinsight.component.css'],
  providers:[ContentService]
  
})
export class InsideinsightComponent implements OnInit {
  fulllink:string;
  contents: content[];
  content_detail;
  detail;
  //@Input() insightItem:insight;
  constructor(
     private dataservice:DataService,
     private router: Router
  ){ }

  ngOnInit() {
    this.fulllink=decodeURIComponent(this.router.url);

    this.fulllink=this.fulllink.substring(1,this.fulllink.length);
    this.fulllink=this.fulllink.replace(/_/g,' ');
   console.log(this.fulllink);
  this.dataservice.getcontent(this.fulllink).subscribe(contents =>{
    
   // console.log(contents);
    this.contents=contents;  
    contents.forEach(content => {
      this.content_detail=content.content_detail;
     // this.content_detail=$(this.content_detail);
    });
    //this.content_detail=$(this.content_detail);

   // console.log(this.content_detail);
});


    // this.insideInsights=this.insideService.getcontent();
  }
  
}
