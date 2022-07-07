import styled from 'styled-components';

export const Botao = styled.button`
    width: 250px;
    height: 44px;
    border-radius: 40px;
    border: none;
    background: #1433ff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        transform: scale(1.1);
        transition: all 0.8s;
    }
`;
