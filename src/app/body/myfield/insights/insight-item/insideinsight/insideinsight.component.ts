import { Component, OnInit } from '@angular/core';
import { ContentModel } from './content.model';
import { ContentService } from './content.service';

@Component({
  selector: 'app-insideinsight',
  templateUrl: './insideinsight.component.html',
  styleUrls: ['./insideinsight.component.css'],
  providers:[ContentService]
  
})
export class InsideinsightComponent implements OnInit {
  insideInsights:ContentModel[];
  constructor(private insideService:ContentService) { }

  ngOnInit() {
    this.insideInsights=this.insideService.getcontent();
  }
  
}
