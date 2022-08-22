import { Component, OnInit } from '@angular/core';
import { UpdatedLogService } from '../updated-log.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message? : string; 
  constructor(private logservice: UpdatedLogService) { }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("child 3") ; 
  }

}
