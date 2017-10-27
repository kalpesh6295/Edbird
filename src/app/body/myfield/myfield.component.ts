import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfield',
  templateUrl: './myfield.component.html',
  styleUrls: ['./myfield.component.css']
})
export class MyfieldComponent implements OnInit {
  current="catalogue"
  constructor() { }

  ngOnInit() {
  }

}
