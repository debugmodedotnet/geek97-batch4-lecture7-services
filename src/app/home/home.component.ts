import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // read scroll event 
  // read you recahed 80% of bootom of screen 
  // lazy load the next components 
  // hero - component 
  // div1 - component
  // div2- componente 
}
