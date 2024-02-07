import { observer } from 'mobx-react';
import { useState } from 'react';
import * as React from 'react';

import MakeAppointmentForm from '../../ServicesAndAppointmens/MakeAppointmentForm';
import EditBusinessForm from '../BusinessDetails/EditBusinessForm';
import { deleteServiceFromServer, updateServiceToServer } from '../../Data/Server/ServiceServer';
import MDetailsStore from '../../Data/Stores/MDetailsStore';
import '../../popup.css'

import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import BusinessIcon from '@mui/icons-material/Business';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EditIcon from '@mui/icons-material/Edit';


const Service = observer(({ service }) => {

  const [showEditForm, setShowEditForm] = useState(false);

  const [showAppointmentForm, setShowAppointmentForm] = useState(false)

  const handleMakeMeeting = () => {
    setShowAppointmentForm(true);
  }
  const handleDeleteService = () => {
    deleteServiceFromServer(service.id);
  };

  const handleEditService = () => {
    setShowEditForm(true);
  };

  const updateService = (service) => {
    updateServiceToServer(service);
  };


  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {MDetailsStore.managerEntrance && (
            <><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {service.id}
            </Typography>
            </>)}

          <Typography variant="h5" component="div">
            {service.name}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {service.description}
          </Typography>

          <Typography variant="body2">
            <BusinessIcon />
            {service.owner}
            <br />

            <MailIcon />
            {service.email}
            <br />

            <PhoneIcon />
            {service.phone}
            <br />
          </Typography>
        </CardContent>

        <CardActions>
          {MDetailsStore.managerEntrance && (<><Tooltip title="Delete">
            <IconButton onClick={handleDeleteService}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

            <Tooltip title="Edit">
              <IconButton onClick={handleEditService}>
                <EditIcon />
              </IconButton>
            </Tooltip></>)}

          {!MDetailsStore.managerEntrance && (<Tooltip title="Make Meeting">
            <IconButton onClick={handleMakeMeeting}>
              <EditCalendarIcon />
            </IconButton>
          </Tooltip>)}

        </CardActions>
      </Card>

      {showEditForm ? (
        <div className="popup">
          <div className="popup-inner">
            <Tooltip title="Exit">
              <IconButton onClick={() => setShowEditForm(false)}>
                <HighlightOffIcon color="error" />
              </IconButton>
            </Tooltip>
            <EditBusinessForm
              mainBusiness={false}
              business={service}
              onSaveChange={(service) => {
                setShowEditForm(false);
                updateService(service);
              }}
            />
          </div>
        </div>
      ) : null}

      {showAppointmentForm ? (
        <div className="popup">
          <div className="popup-inner">
            <Tooltip title="Exit">
              <IconButton onClick={() => setShowAppointmentForm(false)}>
                <HighlightOffIcon color="error" />
              </IconButton>
            </Tooltip>
            <MakeAppointmentForm service={service}
              onSaveChange={() => setShowAppointmentForm(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
});

export default Service;


