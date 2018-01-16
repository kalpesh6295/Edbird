import { Component, OnInit, Input } from '@angular/core';
import { IndexModel } from "../index.model";
import { Output } from '@angular/core/src/metadata/directives';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {
  @Input() category:IndexModel;
  @Input() categoryIndex:number;
  field :string;
  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  profession:string;
  output(){
   this.profession=this.category.name;
    //console.log(this.profession);
   // console.log(this.router.url);
  }
}
