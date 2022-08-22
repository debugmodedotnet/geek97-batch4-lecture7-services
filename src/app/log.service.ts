import { Injectable } from '@angular/core';
import { getLog } from './factory';
import { UpdatedLogService } from './updated-log.service';

// console.log("I am part of final output bundle");

@Injectable({
  providedIn:'root',useFactory:getLog
})
export class LogService {

  static sreviceObjectCount = 0; 
  constructor() { 
    LogService.sreviceObjectCount = LogService.sreviceObjectCount + 1; 
    console.log('number of objects of Logserivice', LogService.sreviceObjectCount);
  }

  sayHello(name: string){
    // call to api version 1 REST based api 
    return "Hello " + name; 
  }
}

// singlton 
// tree shakeable 
// aviabale in whole app