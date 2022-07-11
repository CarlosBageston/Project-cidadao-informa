import styled from 'styled-components';

export const Input = styled.input`
    margin-top: 50px;
    margin-left: 45px;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    font-size: 19px;
    padding-left: 10px;
    outline: 0;
    border-color: white;
    width: 250px;
    ::-webkit-input-placeholder {
        color: #cdcdcd;
    }
`;

export const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;
    margin-left: 40%;
    margin-top: 10%;
    backdrop-filter: blur(16px) saturate(180%);
    border-radius: 54px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    background: linear-gradient(117deg, #50c7f3, #8a3ffc);
    box-shadow: 30px 30px 41px #54bcf330, -30px -30px 41px #8054fa3d;
`;

export const Button = styled.button`
    min-height: 45px;
    width: 220px;
    margin-left: 65px;
    margin-bottom: 20px;
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

export const Text = styled.h1`
    margin-top: auto;
    text-align: center;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;