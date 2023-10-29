import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Divider, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [data, setData] = useState({
        username:"",
        password:""
    });
    const navigate = useNavigate();
    async function loginUser(){
        
    }

    function handleInput(e){
        setData({...data, [e.target.name]:e.target.value});
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        let result = await axios.post(`http://localhost:4500/api/auth/login`, data);
        console.log(result);
        if(result.status === 200){
            if(result.data.success === false){
                toast.error(result.data.message, {autoClose:1000});
            } else if(result.data.success === true){
                toast.warning(result.data.message, {autoClose:1000});
            }
        } else if(result.status === 201){
            toast.success(result.data.message, {autoClose:1000});
            navigate('/home');
        }
    }

  return (
    <div>
        <form>
            <Grid container spacing={5} justifyItems="center" alignItems="center" sx={{backgroundColor:"", width:'auto',marginBottom:5 }}
            style={{minHeight:"100vh"}}>
                <Grid item xs={4} md={4} lg={4}>
                </Grid>
                <Grid item xs={4} md={4} lg={4} sx={{marginTop:20, marginBottom:20, p:5}} style={{border:"2px solid grey", borderRadius:"5px"}}>
                    <Typography variant="h5" color='secondary' align='center' mb={4}>Login Page</Typography>
                    {/* <Divider sx={{}} fullWidth mb={5}/> */}
                    <TextField label="Username" variant="standard" fullWidth 
                    name='username'
                    value={data.username}
                    onChange={handleInput} /> 
                    <TextField label="Password" variant="standard" type='password' fullWidth
                    name='password'
                    value={data.password}
                    onChange={handleInput}
                    />
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button 
                        onClick={handleSubmit}
                        sx={{marginTop:4, alignItems:'center'}}
                        variant="outlined" color='secondary' endIcon={<LoginIcon />} >Login</Button>
                    </div>
                    
                </Grid>
                <Grid item xs={4} md={4} lg={4}/>
            </Grid>
        </form>
    </div>
  )
}

export default Login