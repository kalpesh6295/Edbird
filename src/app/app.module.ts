import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes,RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './body/index/index.component';
import { MyfieldComponent } from './body/myfield/myfield.component';
import { InsightsComponent } from './body/myfield/insights/insights.component';
import { StoriesComponent } from './body/myfield/stories/stories.component';
import { IndexService } from './body/index/index.service';
import{AppService} from './app.service';
import{HeaderService} from './header/header.service';
import { SigninComponent } from './body/signin/signin.component';
import { InsightItemComponent } from './body/myfield/insights/insight-item/insight-item.component';
import { InsightService } from './body/myfield/insights/insights.service';
import { CategoriesItemComponent } from './body/index/categories-item/categories-item.component';
import { InsideinsightComponent } from './body/myfield/insights/insight-item/insideinsight/insideinsight.component';
import { StoryItemComponent } from './body/myfield/stories/story-item/story-item.component';
import { AuthorsComponent } from './body/myfield/authors/authors.component';
import { InsideStoryComponent } from './body/myfield/stories/story-item/inside-story/inside-story.component';
import { HttpModule } from '@angular/http';
import { Location,PathLocationStrategy, LocationStrategy} from '@angular/common';
import * as firebase from 'firebase';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {DataService} from './service/data.service'

export const firebaseConfig = {
  apiKey: "AIzaSyAqKMSoMIFr6uR2g4qbyv9VOZ0_OAn0Lzk",
  authDomain: "edbird-56c2c.firebaseapp.com",
  databaseURL: "https://edbird-56c2c.firebaseio.com",
  projectId: "edbird-56c2c",
  storageBucket: "edbird-56c2c.appspot.com",
  messagingSenderId: "102733498004"
};
firebase.initializeApp(firebaseConfig);
const appRoutes:Routes=[
  { path: '', component: BodyComponent, children:[
      { path: '', component: IndexComponent},
      { path: 'categories/:name', component: MyfieldComponent,children:[
      { path: 'Insights', component: InsightsComponent},
      { path: 'Stories', component: StoriesComponent}
      
      ] },
     
      { path: ':content_heading', component: InsideinsightComponent},
      {path: ':author_name', component: AuthorsComponent}
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
    StoryItemComponent,
    AuthorsComponent,
    InsideStoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [IndexService,DataService,HeaderService,InsightService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
