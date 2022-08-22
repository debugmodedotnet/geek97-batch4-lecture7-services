import { LogService } from "./log.service";
import { UpdatedLogService } from "./updated-log.service";

const flag = false; // busineslogic 

export const getLog = () =>{
  if(flag){
    return new LogService;
  }
  else {
    return new UpdatedLogService;
  }
}

