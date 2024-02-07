import { observer } from "mobx-react";
import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";

import { getServices } from "../../Data/Server/ServiceServer";
import ServiceStore from "../../Data/Stores/ServiceStore";
import Service from "./Service";

const ListServices = observer(() => {
  const [servicesList,setServicesList]=useState(ServiceStore.serviceList);
  useEffect(()=>{
  getServices();
 
 },[])
 useEffect(()=>{
  setServicesList(ServiceStore.serviceList)
 },[ServiceStore.serviceList])
 
  return (
    <Grid container spacing={1}>
  {servicesList.map((service, index) => (
    <Grid item key={index} xs={6} sm={4} md={3} lg={3}>
      <Service service={service} />
    </Grid>
  ))}
</Grid>

  );
});

export default ListServices;

