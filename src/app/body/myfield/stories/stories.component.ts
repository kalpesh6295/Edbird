import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import {  stories } from '../../../model/Field';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  stories: stories[];

  
  constructor(
    private dataservice: DataService,
    
  ) { }

  ngOnInit() {
    this.dataservice.getstories().subscribe(stories =>{
      this.stories=stories;
    })
}

}
