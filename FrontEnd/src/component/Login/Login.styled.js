import styled, { css } from "styled-components";

export const common = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const InputCommon=css`
width:200px;
height:25px;
padding:10px;
border-radius:5px;
font-size:18px;
`

export const StyledContainer = styled.div`
margin: 0 auto;
  width: 400px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  align-self: center;
  justify-content: center;
`;

export const StyledInnerContainer = styled.div`
 
`;

export const StyledLogin = styled.h1`
  font-size: 32px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;



export const StyledInputPhoneNumberContainer = styled.div`
  ${common}
`;
export const StyledInputEmailLabel = styled.label`
font-size:22px;
`;

export const StyledInputEmail = styled.input`
${InputCommon}
`;

export const StyledInputPasswordContainer = styled.div`
  ${common}
`;

export const StyledInputPasswordLabel = styled.label`
font-size:22px;

`;

export const StyledInputPassword = styled.input`
${InputCommon}
`;
export const StyledSubmitContainer=styled.div`
    margin:10px;
`

export const StyledRegisterBtn = styled.input`
    display:flex;
    align-items:center;
    justify-content: center;
    margin:0 auto;
    padding:6px;
    width:200px;
    border-radius: 20px;
    border:0.5px;
    background-color: green;
    color:white;
    font-size:22px;
`;
