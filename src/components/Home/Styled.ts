import styled from 'styled-components';

export const HeaderConteiner = styled.header`
    margin-top: -2px;
    position: relative;
    margin-top: -22px;
    width: 100%;
    height: 150px;
    background: linear-gradient(117deg, #7f52c4, #50c7f3);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    overflow: hidden;
`;
export const Image = styled.img`
    margin-left: 10%;
    margin-top: 20px;
`;
export const Title = styled.h1`
    color: #fff;
    margin-left: 20%;
    margin-top: -8%;
`;
export const Svg = styled.svg`
    position: absolute;
    right: -52px;
    top: -40px;
    transform: rotate(286deg);
`;
export const Svg2 = styled.svg`
    position: absolute;
    right: -35px;
    top: -23px;
    transform: rotate(93deg);
`;
export const H1 = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;
export const Contaner = styled.section`
    width: 700px;
    height: 82vh;
    border: 1px solid black;
    margin: auto;
    margin-top: 5px;
    overflow: auto;
    border-radius: 5px;
`;
export const Ul = styled.ul`
    list-style: none;
`;
export const A = styled.a`
    text-decoration: none;
`;
export const Li = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 24px;
    padding-left: 18px;
    color: #006699;
    font-family: 'Roboto';
    border: 1px solid #666;
    padding: 8px;
    width: 99%;
    margin-left: 5px;
    margin-top: 2px;
    &:hover {
        color: blue;
        background-color: #f1f1f1;
    }
`;
