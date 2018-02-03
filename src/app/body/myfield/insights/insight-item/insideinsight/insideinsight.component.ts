import { Component, OnInit, Input } from '@angular/core';
import { ContentModel } from './content.model';
import { ContentService } from './content.service';
import { insight } from '../../../../../model/Field';
import { DataService } from '../../../../../service/data.service';
import { Router } from '@angular/router';
import { content } from '../../../../../model/Field';

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
  constructor(
     private dataservice:DataService,
     private router: Router
  ){ }

  ngOnInit() {
    this.fulllink=decodeURIComponent(this.router.url);
    this.fulllink=this.fulllink.substring(1,this.fulllink.length);
  this.dataservice.getcontent(this.fulllink).subscribe(contents =>{
    this.contents=contents;  
    contents.forEach(content => {
      this.content_detail=content.content_detail;
    });
});
  }
  
}
