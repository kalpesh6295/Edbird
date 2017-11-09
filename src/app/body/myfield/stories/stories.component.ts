import { Component, OnInit } from '@angular/core';
import { Insight } from '../insights/insights.model';
import { InsightService } from '../insights/insights.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  insights:Insight[]=[];
  constructor(
    private insightService:InsightService
  ) { }

  ngOnInit() {
    this.insights=this.insightService.getInsights();
  }

}
