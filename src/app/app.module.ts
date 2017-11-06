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
import { ResourcesComponent } from './body/myfield/resources/resources.component';
import { IndexService } from './body/index/index.service';
import { SigninComponent } from './body/signin/signin.component';
import { InsightItemComponent } from './body/myfield/insights/insight-item/insight-item.component';
import { InsightService } from './body/myfield/insights/insights.service';
import { CategoriesItemComponent } from './body/index/categories-item/categories-item.component';


const appRoutes:Routes=[
  { path: '', component: BodyComponent, children:[
      { path: '', component: IndexComponent},
      { path: 'categories/:name', component: MyfieldComponent,children:[
      { path: 'Insights', component: InsightsComponent},
      { path: 'Resources', component: ResourcesComponent},
      { path: '**', component: BodyComponent}
    ] },
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
    ResourcesComponent,
    SigninComponent,
    InsightItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IndexService,InsightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
