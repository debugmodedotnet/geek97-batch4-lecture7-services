import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { UpdatedLogService } from '../updated-log.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  message? : string; 
  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Child 2 ");
  }

}

// developer look at the service 
// create a service 
// provide a service 
// inject a service
// use a service 

// angular look at the service 

// whether you are using a service ? [compile]
// whether you have injected that service [ compile]
// how you have provided that service [ run time]
// whether service exist or not or created or not 
