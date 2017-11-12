import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../stories.model';

@Component({
  selector: 'story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {
  @Input() storiesItem:Story;
  constructor() { }

  ngOnInit() {
  }

}
