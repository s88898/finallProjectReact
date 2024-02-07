import { action, makeObservable, observable } from "mobx";


class ServiceStore {

    serviceList = [
       
    ];

    constructor() {
        makeObservable(this, {
            serviceList: observable,
            setServiceList: action,
            deleteService: action,
             addService: action,
            updateService: action,
        })
    }

    setServiceList = (data) => {
        if(data.length>0){
            this.serviceList=[...data];
        }
        this.services = [...defaultServices];
    }

    addService = (service) => {
        this.serviceList=[...this.serviceList,service];
    }
    

    deleteService = (id) => {
        const index = this.serviceList.findIndex((service) => service.id === id)
        if (index !== -1) {
            this.serviceList.splice(index, 1);
            alert('The service was deleted')
        }
        else {
            alert('The service was not found')
        }
    }

    updateService = (serviceToUpdate) => {
        const index = this.serviceList.findIndex((service) => service.id === serviceToUpdate.id)
        this.serviceList[index] = serviceToUpdate;
        alert('service was update sucsessful')
    }
}
export default new ServiceStore();

const defaultServices=[ {
    id: "11",
    name: "bla bla bla",
    owner: "bla bla bla",
    description: "bla bla bla",
    phone: "054-123456",
    email: "bla@bla.com",

},
{
    id: "13",
    name: "bla bla bla",
    owner: "bla bla bla",
    description: "bla bla bla",
    phone: "054-123456",
    email: "bla@bla.com",
   
},
{
    id: "12",
    name: "bla bla bla",
    owner: "bla bla bla",
    description: "bla bla bla",
    phone: "054-123456",
    email: "bla@bla.com",
   
},
{
    id: "14",
    name: "bla bla bla",
    owner: "bla bla bla",
    description: "bla bla bla",
    phone: "054-123456",
    email: "bla@bla.com",
   
},]
