import styled from 'styled-components';

export const HeaderConteiner = styled.header`
    display: flex;
    width: 100%;
    height: 150px;
    background: linear-gradient(270deg, rgba(86, 191, 251, 0.9) 0%, rgba(87, 12, 146, 0.62) 100%);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`;
export const Image = styled.img`
    margin-top: -15px;
`;
export const Title = styled.h1`
    color: #fff;
    margin-top: 28px;
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
    margin-top: 100px;
    margin-left: 150px;
    color: #fff;
`;
export const Contaner = styled.section`
    display: flex;
    flex-direction: column;
    padding: 14px 30px;
`;
export const Ul = styled.ul`
    list-style: none;
`;
export const A = styled.a`
    text-decoration: none;
`;
export const Li = styled.li`
    display: flex;
    margin-bottom: 16px;
    font-size: 28px;
    padding-left: 18px;
    color: #000000;
    font-family: 'Roboto';
    padding: 12px;
    background-color: #d9d9d9;
    margin-top: 2px;
    border-radius: 18px;
    &:hover {
        color: blue;
        background-color: #dedede;
    }
`;
export const Paragraph = styled.p`
    margin-left: 16px;
`;
export const Div = styled.div`
    overflow: auto;
`;
