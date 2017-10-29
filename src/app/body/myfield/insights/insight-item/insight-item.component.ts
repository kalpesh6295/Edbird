import { Component, OnInit,Input } from '@angular/core';
import { Insight } from '../insights.model';

@Component({
  selector: 'insight-item',
  templateUrl: './insight-item.component.html',
  styleUrls: ['./insight-item.component.css']
})
export class InsightItemComponent implements OnInit {
  // insights:Insight[]=[];
  @Input() insightItem:Insight;

  constructor() { }

  ngOnInit() {
  }

}