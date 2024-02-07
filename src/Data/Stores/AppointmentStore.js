import { action, makeObservable, observable } from "mobx";
//import axios from 'axios';

class AppointmentStore {

    appointmentList = [

    ];

    constructor() {
        makeObservable(this, {
            appointmentList: observable,
            // getAppointmentList: action,
             addAppointment: action,
            setAppointmentsList: action,
        })
    }

    setAppointmentsList = (data) => {
        // if (data.length > 0) {
            this.appointmentList = [...data];
        // } else {
        //     this.appointmentList = [...defaultAppointments];
        // }
    }
  
    addAppointment=(appointment)=>{
        this.appointmentList=[...this.appointmentList,appointment]
    }
    

  
}
export default new AppointmentStore();

// const defaultAppointments = [
// {
//     id: "342",
//     serviceType: "12",
//     dateTime: "2025-07-20T10:22:00.000Z",
//     clientName: "Sara Levi",
//     clientPhone: "054-8458681",
//     clientEmail: "saral45@gmail.com",
// },
// {
//     id: "758",
//     serviceType: "11",
//     dateTime: "2021-06-20T10:00:00.000Z",
//     clientName: "Avi Choen",
//     clientPhone: "050-1234567",
//     clientEmail: "Avi232@gmail.com",
// },]
