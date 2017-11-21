import { Component, OnInit,Input } from '@angular/core';
import { insight } from '../../../../model/Field';
import * as $ from 'jquery';


@Component({
  selector: 'insight-item',
  templateUrl: './insight-item.component.html',
  styleUrls: ['./insight-item.component.css']
})
export class InsightItemComponent implements OnInit {
  // insights:Insight[]=[];
  @Input() insightItem:insight;
  //content:string = $(this.insightItem.content_detail);
  ngOnInit() {
   // console.log(this.content);
  }
}