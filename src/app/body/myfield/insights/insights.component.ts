import { Component, OnInit } from '@angular/core';
import { InsightService } from './insights.service';
import { Insight } from './insights.model';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css'],
  providers: [InsightService]
})
export class InsightsComponent implements OnInit {
  insights:Insight[]=[];
  constructor(
    private insightService:InsightService
  ) { }

  ngOnInit() {
    this.insights=this.insightService.getInsights();
  }

}
