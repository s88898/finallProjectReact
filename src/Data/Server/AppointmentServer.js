import AppointmentStore from "../Stores/AppointmentStore";
import axios from "axios";

async function getAppointments() {
    const res = await axios.get('http://localhost:8787/appointments')
     AppointmentStore.setAppointmentsList(res.data);
 }

 const  addAppointmentToServer=async(appointment)=>{
    axios.post('http://localhost:8787/appointment', appointment
      ).then(()=>{
        AppointmentStore.addAppointment(appointment);
        alert("The meeting was successfully scheduled. The meeting details will be sent to the email address you entered")
        return true;
      }).catch(()=>{
       return false;
      }) 
}
 export {getAppointments,addAppointmentToServer}