import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import AssistantIcon from '@mui/icons-material/Assistant';
import styled from 'styled-components';
import { auth } from '../../firebase';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            // dispatch(login({
            //     email: userAuth.user.email,
            //     uid: userAuth.user.uid,
            //     displayName: userAuth.user.displayName,
            //     profileUrl: userAuth.user.photoURL,
            // }))
        }).catch(error => alert(error))

    }

    return (
        <LoginContainer>
            <LoginTitle>
                <AssistantIcon />
                <h1>Login to app</h1>
            </LoginTitle>
            <LoginForm>

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
                    onClick={loginToApp}>
                    Sign In
                </StyledButton>


            </LoginForm>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
`;

const LoginTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    >.MuiSvgIcon-root {
        font-size: 70px;
        color: #4661e6;
        margin-bottom: 20px;
    }
    
    >h1 {
        margin-bottom: 25px;
    }
`;


const StyledButton = styled(Button)`
    background-color: #4661e6 !important;
    margin: 20px 0px 20px !important;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
`;