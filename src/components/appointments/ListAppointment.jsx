import React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function AppointmentList({ appointmentsList }) {

  // const getTime = (dateTime) => {
  //   const date = new Date(dateTime);
  //   const formattedDate = new Intl.DateTimeFormat("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //   }).format(date);
  //   return formattedDate;
  // }
  const colorMeeting = (dateTime) => {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
    const restDay = 7 - meetingDate.getDay()
    const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
  
    if (meetingDate > currentDate && meetingDate <= lastDayOfWeek) {
      return 'orange';
    } else if (
      meetingDate.getDate() === currentDate.getDate() &&
      meetingDate.getMonth() === currentDate.getMonth() &&
      meetingDate.getFullYear() === currentDate.getFullYear()
    ) {
      return 'red';
    } else {
      return 'green';
    }
  }
  

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1">ID</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Service Type</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Date/Time</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Client Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Client Phone</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Client Email</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointmentsList.map((appointment) => (
              <TableRow key={appointment.id} style={{ backgroundColor: colorMeeting(appointment.dateTime) }}>
                <TableCell>
                  <Typography variant="body1">{appointment.id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{appointment.serviceType}</Typography>
                </TableCell>
                <TableCell>
                {/* getTime(appointment.dateTime) */}
                  <Typography variant="body1">{appointment.dateTime}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{appointment.clientName}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{appointment.clientPhone}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{appointment.clientEmail}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );

}
export default AppointmentList;


