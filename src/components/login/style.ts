import styled from "styled-components";

export const Image =  styled.img `
margin-top: -10%;
margin-left: -18%;
`
export const Svg = styled.svg `
margin-left: 75%;
margin-top: -8%;
`
export const Svg2 = styled.svg `
position: absolute;
margin-top: -32%;
margin-left: 83%;
transform: rotate(160deg);
`
export const Logo = styled.img `
position: absolute;
margin-top: -62%;
margin-left: 4%;
`
export const Title = styled.h1 `
margin-top: -52%;
margin-left: 3%;
color: #000;
`
export const Box = styled.div`
width: 350px;
height: 350px;
margin-left: 40%;
margin-top: -2%;
backdrop-filter: blur(16px) saturate(180%);
border-radius: 54px;
border: 1px solid rgba(255, 255, 255, 0.125);
background: linear-gradient(117deg,#50c7f3,#8a3ffc);
box-shadow: 30px 30px 41px #54bcf330, -30px -30px 41px #8054fa3d;
`
export const Form = styled.form `
display: inline-grid;
margin-left: 95px;
margin-top: -5px;
`
export const InputEmail = styled.input`
margin-top: 10px;
border-top: none;
border-left: none;
border-right: none;
background-color: transparent;
margin-left: -37px;
font-size: 19px;
padding-left: 10px;
outline: 0;
border-color: white;
::-webkit-input-placeholder {
    color: #cdcdcd;
  }
`
export const H1 = styled.h1 `
margin-left: 23%;
margin-top: 13%;
font-size: 38px;
color: #e0dfdc;
letter-spacing: .1em;
text-shadow: 3px 4px 4px rgb(4 4 4 / 98%);
`
export const Button = styled.button `
min-height: 45px;
margin-left: -20px;
width: 220px; 
border-radius: 30px; 
border: 0px; 
background-color: rgb(246 246 246 / 78%);
font-family: "Do Hyeon", sans-serif; 
height: 50px; 
font-size: 25px; 
font-weight: 200; 
letter-spacing: 2px;
cursor: pointer;
margin-top: 35px;
&:hover {
    background-color: #32fa32;
    transform: scale(1.1);
    transition: all 0.8s;
};
`
export const InputCheckBox = styled.input `
margin-top: 10px;
margin-left: -35px;
`
export const Label = styled.label`
margin-top: -18px;
margin-left: -18px;
font-size: 14px;
`
export const A = styled.a `
margin-left: 49%;
margin-top: -19px;
text-decoration: none;
color: black;
font-size: 14px;
`
