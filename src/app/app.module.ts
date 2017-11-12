import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './body/index/index.component';
import { MyfieldComponent } from './body/myfield/myfield.component';
import { InsightsComponent } from './body/myfield/insights/insights.component';
import { StoriesComponent } from './body/myfield/stories/stories.component';
import { IndexService } from './body/index/index.service';
import { SigninComponent } from './body/signin/signin.component';
import { InsightItemComponent } from './body/myfield/insights/insight-item/insight-item.component';
import { InsightService } from './body/myfield/insights/insights.service';
import { CategoriesItemComponent } from './body/index/categories-item/categories-item.component';
import { InsideinsightComponent } from './body/myfield/insights/insight-item/insideinsight/insideinsight.component';
import { StoryItemComponent } from './body/myfield/stories/story-item/story-item.component';


const appRoutes:Routes=[
  { path: '', component: BodyComponent, children:[
      { path: '', component: IndexComponent},
      { path: 'categories/:name', component: MyfieldComponent,children:[
      { path: 'Insights', component: InsightsComponent},
      { path: 'Stories', component: StoriesComponent}
      ] },
      { path: ':books', component: InsideinsightComponent}
  ] },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CategoriesItemComponent,
    IndexComponent,
    MyfieldComponent,
    InsightsComponent,
    StoriesComponent,
    SigninComponent,
    InsightItemComponent,
    InsideinsightComponent,
    StoryItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IndexService,InsightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
