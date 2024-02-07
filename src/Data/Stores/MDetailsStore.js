import { makeObservable, observable ,action  } from 'mobx';

class MdetailsStore{
     details = {  
        
}
   
managerEntrance=false

    constructor(){
        makeObservable(this,{
            details : observable,
            managerEntrance:observable,
            setBusinessData : action,
            setManagerEntrance: action,
        })
     }
     setManagerEntrance(value) {
        this.managerEntrance = value;
      }
     setBusinessData=(data)=>{
       this.details=data
        }
}

export default new MdetailsStore();

