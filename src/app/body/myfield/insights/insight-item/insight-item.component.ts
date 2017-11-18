import { Component, OnInit,Input } from '@angular/core';
import { insight } from '../../../../model/Field';



@Component({
  selector: 'insight-item',
  templateUrl: './insight-item.component.html',
  styleUrls: ['./insight-item.component.css']
})
export class InsightItemComponent  {
  // insights:Insight[]=[];
  @Input() insightItem:insight;
  
}