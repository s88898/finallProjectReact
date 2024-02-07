import { useState } from 'react';
import { observer } from 'mobx-react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const EditBusinessForm = (observer(({ business, onSaveChange, mainBusiness }) => {

  const [formData, setFormData] = useState(business);

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
        {mainBusiness && (<><TextField
          required
          id="outlined-required"
          label="address"
          type="text"
          name='address'
          value={formData.address}
          onChange={handleChange}
        />
        <br/>
        <br/>
        </>)}
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
        {mainBusiness && (<><TextField
          required
          id="outlined-required"
          label="logo"
          type="text"
          name='logo'
          value={formData.logo}
          onChange={handleChange}
        />
        <br />
        <br />
        </>)}
        <Button variant="contained" type='submit'><SaveAsIcon /></Button>
      </form>
    </>
  )
}))

export default EditBusinessForm

// import { useState } from 'react';
// import { observer } from 'mobx-react'

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import SaveAsIcon from '@mui/icons-material/SaveAs';
// import Stack from '@mui/material/Stack';

// const EditBusinessForm = observer(({ business, onSaveChange, mainBusiness }) => {
//   const [formData, setFormData] = useState(business);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSaveChange(formData);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <Stack spacing={2}>
//         <TextField
//           required
//           fullWidth
//           label="ID"
//           type="number"
//           name="id"
//           value={formData.id}
//           onChange={handleChange}
//         />
//         <TextField
//           required
//           fullWidth
//           label="Name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <TextField
//           required
//           fullWidth
//           label="Owner"
//           type="text"
//           name="owner"
//           value={formData.owner}
//           onChange={handleChange}
//         />
//         <TextField
//           required
//           fullWidth
//           label="Description"
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//         {mainBusiness && (
//           <TextField
//             required
//             fullWidth
//             label="Address"
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         )}
//         <TextField
//           required
//           fullWidth
//           label="Phone"
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <TextField
//           required
//           fullWidth
//           label="Email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {mainBusiness && (
//           <TextField
//             required
//             fullWidth
//             label="Logo"
//             type="text"
//             name="logo"
//             value={formData.logo}
//             onChange={handleChange}
//           />
//         )}
//         <Button variant="contained" type="submit">
//           <SaveAsIcon />
//         </Button>
//       </Stack>
//     </form>
//   );
// })

// export default EditBusinessForm;
