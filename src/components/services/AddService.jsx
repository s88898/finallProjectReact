
import { useState } from 'react';
import { observer } from 'mobx-react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const AddService = (observer(({  onSaveChange, mainBusiness }) => {

  const [formData, setFormData] = useState({id:'',name:'',owner:'',description:'',phone:'',email:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveChange(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
       
        <TextField
          required
          id="outlined-required"
          label="id"
          type="number"
          name='id'
          value={formData.id}
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="name"
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="owner"
          type="text"
          name='owner'
          value={formData.owner}
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="description"
          type="text"
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />
        
        <TextField
          required
          id="outlined-required"
          label="phone"
          type="text"
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="email"
          type="email"
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        
        <Button variant="contained" type='submit'><SaveAsIcon /></Button>
      </form>
    </>
  )
}))

export default AddService

