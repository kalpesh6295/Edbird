import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './body/index/index.component';
import { CategoriesItemComponent } from './body/index/categories-item/categories-item.component';
import { MyfieldComponent } from './body/myfield/myfield.component';
import { CatalogueComponent } from './body/myfield/catalogue/catalogue.component';
import { ResourcesComponent } from './body/myfield/resources/resources.component';
import { IndexService } from './body/index/index.service';
import { SigninComponent } from './body/signin/signin.component';


const appRoutes:Routes=[
  { path: '', component: BodyComponent },
  { path: 'categories', component: MyfieldComponent,children:[
    { path: ':name/Insights', component: CatalogueComponent},
    { path: '**/**', component: BodyComponent}
  ] },
  { path: 'SignIn', component: SigninComponent } 
 
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IndexComponent,
    CategoriesItemComponent,
    MyfieldComponent,
    CatalogueComponent,
    ResourcesComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IndexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
