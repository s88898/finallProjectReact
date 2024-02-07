import { useState } from 'react';
import { observer } from 'mobx-react';

import ListServices from './ListServices';
import { addServiceToServer } from '../../Data/Server/ServiceServer';

import '../../popup.css'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddService from './AddService';


const ServicesPage = (observer(() => {

  const [showAddServiceForm, setShowAddServiceForm] = useState(false);

  const handleAddService = (service) => {
    addServiceToServer(service);
  }

  return (
    <>
      <br />
      <button onClick={() => setShowAddServiceForm(true)}><AddCircleIcon /> <br />Add Service</button>
      {showAddServiceForm ? (
        <div className="popup">
          <div className="popup-inner">

            <Tooltip title="Exit">
              <IconButton onClick={() => setShowAddServiceForm(false)}>
                <HighlightOffIcon color="error" />
              </IconButton>
            </Tooltip>

            <AddService mainBusiness={false}
              onSaveChange={(service) => {
                setShowAddServiceForm(false);
                handleAddService(service)
              }} />
          </div>
        </div>
      ) : null}
      <ListServices />
    </>
  )
}))

export default ServicesPage
