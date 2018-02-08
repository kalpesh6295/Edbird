import { Component, OnInit, DoCheck ,OnDestroy} from '@angular/core';
import { insight } from '../../../model/Field';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
  
})
export class InsightsComponent implements OnInit, OnDestroy {
  profession: string;
  insights: insight[];
  link;
  constructor(
      private dataservice: DataService,
      private router: Router,
      meta: Meta, title: Title
  ) {
      this.link = this.router.events.subscribe(() => {
          this.profession = decodeURIComponent(this.router.url).substring(12, decodeURIComponent(this.router.url).length - 9);
          title.setTitle(this.profession);
          this.dataservice.getinsights(this.profession).subscribe(insights => {
              this.insights = insights;
          });
      });
  }

  ngOnInit() {

  }
  ngOnDestroy(): void {
      this.link.unsubscribe();
  }
}