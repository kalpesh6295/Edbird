import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router';
import { author } from '../../../model/Field';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
author_name: string;
url_length;
authors: author[];
name: string;
  constructor(//private categoryService:IndexService, 
    private dataservice: DataService,
    private router: Router
  //  private route : ActivatedRoute
  ) { this.router.events.subscribe(() => {
    this.author_name=decodeURIComponent(this.router.url);
    this.url_length=this.author_name.length;
    this.name=this.author_name.substring(15,this.url_length);
    this.name=this.name.replace(/_/g,' ');
    console.log(this.author_name.substring(1,14));
   if(this.author_name.substring(1,14)=="professionals"){
     this.dataservice.getauthor(this.name).subscribe(authors =>{
     
      this.authors=authors;
   
    });
  }
    
});
  }

  ngOnInit() {
    this.author_name=decodeURIComponent(this.router.url);
    this.url_length=this.author_name.length;
    this.name=this.author_name.substring(15,this.url_length);
    this.name=this.name.replace(/_/g,' ');
    console.log(this.name);
    if(this.author_name.substring(1,14)=="professionals"){
      this.dataservice.getauthor(this.name).subscribe(authors =>{
      
       this.authors=authors;
    
     });
   }
    
 
}
  

}
