import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-myfield',
  templateUrl: './myfield.component.html',
  styleUrls: ['./myfield.component.css']
})
export class MyfieldComponent implements OnInit {
  category:{name:string};
  current="insights"
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.category= {
      name: this.route.snapshot.params['name']           
    };
    this.route.params.subscribe(
      (params:Params)=>{
      this.route.params['name']   
      //console.log(name);  
      }

    );
    
  }
}
