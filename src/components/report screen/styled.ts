import styled from 'styled-components';

export const Right = styled.section`
    float: right;
    border-left: 1px solid #666;
    width: 400px;
    height: 100vh;
    justify-content: center;
    align-items: center;
    animation: report 2s linear;
    display: none;
    padding: 8px;
    @keyframes report {
        from {
            margin-right: -28%;
        }
    }
`;

export const Button = styled.button`
    margin-top: -98%;
    width: 50%;
    margin-left: 100px;
    height: 32px;
`;
export const ButtonLeft = styled.button`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    margin-left: 15%;
`;
export const Input = styled.input`
    margin-top: 25%;
    height: 30%;
    width: 91%;
    margin-left: 12px;
`;
export const Text = styled.p`
    font-size: 30px;
    margin-top: 50px;
    font-family: roboto;
`;
export const Left = styled.section`
    display: inline-grid;
    margin-left: 20%;
    margin-top: 1%;
    width: 500px;
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
