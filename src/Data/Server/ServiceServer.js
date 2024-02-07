import ServiceStore from '../Stores/ServiceStore'
import axios from 'axios';

async function getServices() {
   const res = await axios.get('http://localhost:8787/services')
    ServiceStore.setServiceList(res.data);
}

const  addServiceToServer=async(service)=>{
    axios.post('http://localhost:8787/service',service
      ).then(()=>{
        ServiceStore.addService(service);
      }).catch((error)=>{
        console.log(error.statusText);
      }) 
}

const updateServiceToServer=async(service)=>{
    axios.put('http://localhost:8787/service',service
    ).then(()=>{
        ServiceStore.updateService(service);
    }).catch((error)=>{
        console.log(error.statusText);
      })
}

const deleteServiceFromServer=async(id)=>{
    axios.delete('http://localhost:8787/service', id
    ).then(()=>{
        ServiceStore.deleteService(id);
    }).catch((error)=>{
        console.log(error.statusText);
      })
}


export {getServices,addServiceToServer,updateServiceToServer,deleteServiceFromServer};