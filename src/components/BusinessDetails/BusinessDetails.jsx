import { useEffect, useState } from "react";
import { observer } from 'mobx-react'

import '../../popup.css'
import EditBusinessForm from "./EditBusinessForm";
import { getBussinessData } from "../../Data/Server/MDetailsServer";
import { updateBusinessData } from "../../Data/Server/MDetailsServer";

import image from "../../images/LOGOManager.jpg"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import EditIcon from '@mui/icons-material/Edit';
import MDetailsStore from "../../Data/Stores/MDetailsStore";

const BusinessDetails = observer(() => {

  const [showEditForm, setShowEditForm] = useState(false);

  const [bDetails, setBDetails] = useState(MDetailsStore.details);

  useEffect(() => {
    getBussinessData();

  }, [])

  const handleupdateBusiness = (business) => {
    updateBusinessData(business);
  };

  useEffect(() => {
    setBDetails(MDetailsStore.details);
  }, [MDetailsStore.details])

  return (
    <>
      <Card>
        <CardContent>
          {MDetailsStore.managerEntrance &&
            (
              <Typography sx={{ fontSize: 14 }} color="text.secondary"
                gutterBottom>
                id: {bDetails.id}
              </Typography>
            )}

          <Grid container spacing={2}>

            <Grid item xs={12} sm={8}>

              <Typography variant="h5" component="div">
                {bDetails.name}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {bDetails.description}
              </Typography>

              <Typography variant="body2">

                <BusinessIcon />
                {bDetails.owner}
                <br />

                <PlaceIcon />
                {bDetails.address}
                <br />

                <PhoneIcon />
                {bDetails.phone}
                <br />

                <MailIcon />
                {bDetails.email}
                <br />
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ width: '150px', height: '150px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={image} alt="logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          {MDetailsStore.managerEntrance && (
            <>
              <Tooltip title="Edit">
                <IconButton onClick={() => setShowEditForm(true)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
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
              business={bDetails}
              mainBusiness={true}
              onSaveChange={(business) => {
                setShowEditForm(false);
                handleupdateBusiness(business);
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
})

export default BusinessDetails;





