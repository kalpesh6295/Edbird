import { Component, OnInit, Input } from '@angular/core';
import { IndexModel } from "../index.model";

@Component({
  selector: 'app-category-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {
  @Input() category:IndexModel;
  @Input() categoryIndex:number;
  constructor() { }

  ngOnInit() {
  }

}
