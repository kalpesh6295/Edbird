import { Component, OnInit, Input } from '@angular/core';
import { insight } from '../../../../../model/Field';
import { DataService } from '../../../../../service/data.service';
import { Router } from '@angular/router';
import { content } from '../../../../../model/Field';

@Component({
  selector: 'app-insideinsight',
  templateUrl: './insideinsight.component.html',
  styleUrls: ['./insideinsight.component.css']
  
})
export class InsideinsightComponent implements OnInit {
  content_detail;
  contents;
  constructor(
      private dataservice: DataService,
      private router: Router
  ) {}

  ngOnInit() {
      this.dataservice.getcontent(decodeURIComponent(this.router.url).substring(1, decodeURIComponent(this.router.url).length)).subscribe(contents => {
          this.contents = contents;
          contents.forEach(content => {
              this.content_detail = content.content_detail;
          });
      });
  }

}