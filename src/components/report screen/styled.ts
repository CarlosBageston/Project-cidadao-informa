import styled from 'styled-components';

export const ButtonLeft = styled.button`
    margin-inline: auto;
    width: 250px;
    height: 44px;
    border-radius: 40px;
    border: none;
    background: #1433ff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    margin-top: 100px;
    margin-bottom: 40px;
    &:hover {
        transform: scale(1.1);
        transition: all 0.8s;
    }
`;
export const Input = styled.input`
    margin-top: auto;
    height: 50px;
    width: 100%;
    border-radius: 15px;
`;
export const Text = styled.p`
    font-size: 30px;
    margin-top: 50px;
    font-family: roboto;
`;
export const Left = styled.section`
    display: flex;
    flex-direction: column;
    width: 500px;
    background-color: #d9d9d9;
    margin-top: 24px;
    margin-left: 28px;
    align-items: flex-start;
    padding: 16px;
    border-radius: 24px;
`;
export const Titles = styled.p`
    font-size: 24px;
`;
export const Inicio = styled.a`
    margin-left: 20%;
    text-decoration: none;
    color: white;
    padding-bottom: 5px;
    &:hover {
        background: linear-gradient(to bottom, #7271d0 0%, #7d57c6 63%, #360383 100%);
    }
`;
export const Imagem = styled.img`
    margin: auto;
`;
export const TextUser = styled.div`
    margin-left: 10px;
`;
export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
