import { Component, OnInit, Input } from '@angular/core';
import { stories } from '../../../../model/Field';

@Component({
  selector: 'story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css'],
})
export class StoryItemComponent implements OnInit {
  @Input() storiesItem:stories;
  
  
    constructor(
  
    ) { }
  
    ngOnInit() {
      
    }


}
