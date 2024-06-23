import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  StyledContainer,
  StyledInputNameContainer,
  StyledNameInputLabel,
  StyledNameInput,
  StyledInputContainer,
  StyledLogin,
  StyledInputPhoneNumberContainer,
  StyledInputEmailLabel,
  StyledLoginBtnContainer,
  StyledInputEmail,
  StyledInnerContainer,
  StyledLoginBtn,
  StyledInputPasswordLabel,
  StyledInputPasswordContainer,
  StyledInputPassword,
  StyledSubmitContainer,
  StyledRegisterBtn,
} from "./Register.styled";

const Register = () => {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate = useNavigate();


  const handleSubmit=(e)=>{
    console.log("form submit");
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))

  }

  return (
    <>
      <StyledContainer>
        <StyledInnerContainer>
          <StyledLogin>Register</StyledLogin>
          <StyledInputContainer>
          <form onSubmit={handleSubmit}>
            <StyledInputNameContainer>
              <StyledNameInputLabel>Name*</StyledNameInputLabel>
              <StyledNameInput
                type="text"
                placeholder="Enter You Name"
                required
                onChange={(e)=>setName(e.target.value)}
              />
            </StyledInputNameContainer>
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
            <StyledRegisterBtn type="submit" value="Register" />
            </StyledSubmitContainer>
            <StyledLoginBtnContainer>
                <StyledLoginBtn onClick={()=>navigate('/login')}>Login</StyledLoginBtn>
            </StyledLoginBtnContainer>
            </form>
          </StyledInputContainer>
        </StyledInnerContainer>
      </StyledContainer>
    </>
  );
};

export default Register;
