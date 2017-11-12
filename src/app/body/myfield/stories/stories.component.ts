import { Component, OnInit } from '@angular/core';
import { Story } from '../stories/stories.model';
import { StoriesService } from '../stories/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers:[StoriesService]
})
export class StoriesComponent implements OnInit {

  stories:Story[]=[];
  constructor(
    private storyService:StoriesService
  ) { }

  ngOnInit() {
    this.stories=this.storyService.getstories();
  }

}
