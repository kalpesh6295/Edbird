import { Component, OnInit } from '@angular/core';
import { Story } from '../stories/stories.model';
import { StoriesService } from '../stories/stories.service';
import { DataService } from '../../../service/data.service';
import { insight, stories } from '../../../model/Field';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers:[StoriesService]
})
export class StoriesComponent implements OnInit {
  stories: stories[];

  
  constructor(
    // private storyService:StoriesService
    private dataservice: DataService,
    
  ) { }

  ngOnInit() {
    this.dataservice.getstories().subscribe(stories =>{
      this.stories=stories;
      console.log(stories);
    // this.storiehis.storyService.getstories();
    })
}

}
