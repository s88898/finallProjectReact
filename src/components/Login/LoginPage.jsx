import { useState } from "react";

import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function LoginPage({onLogin}) {

    const [name, setName] = useState('');

    const [password, setPassword] = useState('');

    const [countEntries, setCountEntries] = useState(0);

    const handleLogin = async () => {
        const response = await fetch('http://localhost:8787/login', {
            method: 'POST',
            body: JSON.stringify(
                { name, password }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            onLogin();
            localStorage.setItem('name', name);
            localStorage.setItem('password', password);

        }
        else {
            setCountEntries(countEntries + 1);
            if (countEntries > 2) {
              
                window.location.href = '../../App';
            }
            setName('');
            setPassword('');
            
        }
    }

    return (
        <>
        {countEntries>3? <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        The number of login attempts is high! You are redirected to the home page
      </Alert>:null}
            <TextField
                label="UserName:"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <TextField
                label="Password:"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                type='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Log In</button>
        </>
    )
}

export default LoginPage
