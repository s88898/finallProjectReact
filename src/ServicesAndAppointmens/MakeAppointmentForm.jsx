import { useEffect, useState } from 'react';
import { observer } from 'mobx-react'

import AppointmentStore from '../Data/Stores/AppointmentStore';
import { addAppointmentToServer } from '../Data/Server/AppointmentServer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const MakeAppointmentForm = (observer(({ service, onSaveChange }) => {

  const [formData, setFormData] = useState({ id: '',
    serviceType: '',clientName:'',clientPhone:'',clientEmail:'',dateTime:''});



 useEffect(()=>{
  const newAppointment={};
  newAppointment.id=Math.floor(Math.random() * 91) + 10;
  newAppointment.serviceType=service.id;
  setFormData(newAppointment);
 },[])
  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addAppointmentToServer(formData)) {   
      onSaveChange();
    }
    else {
      setFormData({ ...formData, dateTime: '' });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <TextField
          id="outlined-read-only-input"
          label="Name of Bussiness:"
          defaultValue={service.name}
          InputProps={{
            readOnly: true,
          }}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="name"
          type="text"
          name='clientName'
          value={formData.clientName}
          onChange={handleAppointmentChange}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="phone"
          type="text"
          name='clientPhone'
          value={formData.clientPhone}
          onChange={handleAppointmentChange}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="email"
          type="email"
          name='clientEmail'
          value={formData.clientEmail}
          onChange={handleAppointmentChange}
        />
        <br />
        <br />
        {/* התאריך והשעה לא נשלחים לסרבר כיון שלא הצלחתי בשום אופן ומתרגלת לא הצלחתי לתפוס כל הערב. */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
            <DateTimePicker value={formData.dateTime}  name='dateTime' 
            //  onChange={handleAppointmentChange}
              label="date and time"
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
              style={{ zIndex:10 }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <br />
        <Button variant="contained" type='submit'><SaveAsIcon /></Button>

      </form>
    </>
  )
}))

export default MakeAppointmentForm
