import { useEffect, useState } from "react";
import { observer } from 'mobx-react'

import AppointmentStore from '../../Data/Stores/AppointmentStore';
import ListAppointment from "./ListAppointment";
import { getAppointments } from "../../Data/Server/AppointmentServer";

import '@mui/material/styles';
import Button from '@mui/material/Button';

const Appointments = (observer(() => {

  const [appointmentsList, setAppointmentsList] = useState(AppointmentStore.appointmentList);

  useEffect(() => {
    getAppointments();
    setAppointmentsList(AppointmentStore.appointmentList.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)));
  }, [])

  useEffect(() => {
    setAppointmentsList(AppointmentStore.appointmentList.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)));

  }, [AppointmentStore.appointmentList])


  return (
    <>
      <br />
      <ListAppointment appointmentsList={appointmentsList} />
    </>
  )
}))

export default Appointments
