import React, { useState } from 'react'
import AssistantIcon from '@mui/icons-material/Assistant';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [profilePic, setProfilePic] = useState('');

    const navigate = useNavigate()

    const registerToApp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(auth.currentUser, { displayName: name, photoURL: profilePic });
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <RegisterContainer>
            <RegisterTitle>
                <AssistantIcon />
                <h1>Register to app</h1>
            </RegisterTitle>
            <RegisterForm>
                <TextField
                    margin="normal"
                    id="outlined-basic"
                    label="Full name"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                />

                <TextField
                    margin="normal"
                    id="outlined-basic"
                    label="Profile pic URL"
                    variant="outlined"
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder='Profile pic URL'
                    type="text"
                />

                <TextField
                    margin="normal"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" />

                <TextField
                    margin="normal"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" />

                <StyledButton
                    size="large"
                    variant="contained"
                    type='submit'
                    onClick={registerToApp}>
                    Sign In
                </StyledButton>


            </RegisterForm>
            <p>Already have an account?</p>
            <StyledLink to='/login'>
                <h3>Go to Login Page</h3>
            </StyledLink>
        </RegisterContainer>
    )
}

export default Register


const RegisterContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const RegisterTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    >.MuiSvgIcon-root {
        font-size: 70px;
        color: #464d7b;
        margin-bottom: 20px;
    }
    
    >h1 {
        margin-bottom: 25px;
    }
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
`;

const StyledButton = styled(Button)`
    background-color: #ae1feb !important;
    margin: 20px 0px 20px !important;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #4661e6;
    cursor: pointer;

`;
