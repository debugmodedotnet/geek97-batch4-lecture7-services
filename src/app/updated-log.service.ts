import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({providedIn:'root',useExisting:LogService})
export class UpdatedLogService implements LogService {

  static objectCount = 0;
  constructor() { 
    UpdatedLogService.objectCount = UpdatedLogService.objectCount + 1;
    console.log('number of objects of updated log service', UpdatedLogService.objectCount)
  }

  sayHello(name: string): string {
    return "Hello from Updated " + name;  
  }
}
