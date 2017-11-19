import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../stories.model';
import { IndexModel } from '../../../index/index.model';
import { IndexService } from '../../../index/index.service';

import { insight, stories } from '../../../../model/Field';

@Component({
  selector: 'story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css'],
  providers:[IndexService]
})
export class StoryItemComponent implements OnInit {
  @Input() storiesItem:stories;
  // categories:IndexModel[];
  // @Input() insightItem:insight;
  
    constructor(
      // private categoryService:IndexService
    ) { }
  
    ngOnInit() {
      // this.categories=this.categoryService.getcategories();
    }


}
