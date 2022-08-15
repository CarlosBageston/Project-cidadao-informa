import styled from 'styled-components';

export const Image = styled.img`
    margin-top: -115px;
    margin-left: -260px;
`;
export const Svg = styled.svg`
    display: flex;
    margin-left: 1500px;
    margin-top: 15px;
`;
export const Svg2 = styled.svg`
    position: absolute;
    margin-top: -480px;
    margin-left: 1609px;
    transform: rotate(160deg);
`;
export const Logo = styled.img`
    position: absolute;
    margin-top: -1195px;
    margin-left: -40px;
    width: 360px;
`;
export const Title = styled.h1`
    margin-top: -52%;
    margin-left: 3%;
    color: #000;
`;
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 350px;
    margin-left: 700px;
    margin-top: -800px;
    backdrop-filter: blur(16px) saturate(180%);
    border-radius: 54px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    background: linear-gradient(117deg, #50c7f3, #8a3ffc);
    box-shadow: 30px 30px 41px #54bcf330, -30px -30px 41px #8054fa3d;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 32px;
`;
export const Input = styled.input`
    margin-top: 15px;
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
`;
export const H1 = styled.h1`
    margin-top: 45px;
    font-size: 38px;
    color: #e0dfdc;
    letter-spacing: 0.1em;
    text-shadow: 3px 4px 4px rgb(4 4 4 / 98%);
`;
export const Button = styled.button`
    min-height: 45px;
    margin-left: -20px;
    width: 220px;
    border-radius: 30px;
    border: 0px;
    background-color: rgb(246 246 246 / 78%);
    font-family: 'Do Hyeon', sans-serif;
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
    }
`;
export const InputCheckBox = styled.input`
    margin-top: 10px;
    margin-left: -260px;
`;
export const Label = styled.label`
    margin-top: -15px;
    margin-left: -18px;
    font-size: 14px;
`;
export const A = styled.a`
    margin-left: 84px;
    margin-top: -16px;
    text-decoration: none;
    color: black;
    font-size: 14px;
`;
export const P = styled.p`
    margin-top: 25px;
    color: red;
    font-weight: bold;
`;
