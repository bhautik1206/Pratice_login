import React,{useState} from "react";
import axios from 'axios';
import {
  StyledContainer,
  StyledInputContainer,
  StyledLogin,
  StyledInputPhoneNumberContainer,
  StyledInputEmailLabel,
  StyledInputEmail,
  StyledInnerContainer,
  StyledInputPasswordLabel,
  StyledInputPasswordContainer,
  StyledInputPassword,
  StyledSubmitContainer,
  StyledRegisterBtn,
} from './Login.styled';

const Login = () => {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();

  const handleSubmit=(e)=>{
    console.log("form submit");
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
      if(result.data==="Success"){
        console.log('You are sign up to ')
      }
    })
    .catch(err=>console.log(err))

  }

  return (
    <>
      <StyledContainer>
        <StyledInnerContainer>
          <StyledLogin>Register</StyledLogin>
          <StyledInputContainer>
          <form onSubmit={handleSubmit}>
            <StyledInputPhoneNumberContainer>
              <StyledInputEmailLabel>
                Email*
              </StyledInputEmailLabel>
              <StyledInputEmail
                required
                type="email"
                placeholder="Enter your mail here"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </StyledInputPhoneNumberContainer>
            <StyledInputPasswordContainer>
              <StyledInputPasswordLabel>Password*</StyledInputPasswordLabel>
              <StyledInputPassword
                required
                type="password"
                placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </StyledInputPasswordContainer>
            <StyledSubmitContainer>
            <StyledRegisterBtn type="submit" value="Login" />
            </StyledSubmitContainer>
            </form>
          </StyledInputContainer>
        </StyledInnerContainer>
      </StyledContainer>
    </>
  );
};

export default Login;
