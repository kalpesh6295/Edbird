import { Component, OnInit, Input } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { Router } from '@angular/router';
import {field} from '../../../model/Field'

@Component({
  selector: 'app-category-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {
  @Input() category:field;
  @Input() categoryIndex:number;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  profession:string;
  output(){
   this.profession=this.category.name;
  }
}
