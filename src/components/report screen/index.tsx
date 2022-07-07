import { useState } from 'react';
import Buraco from '../../imagens/exBuraco.jpg';
import { Right, Input, Text, Left, Titles, ButtonLeft } from './styled';
import Header from '../header';
import ButtonDefault from '../button';

function ReportScreen() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <Header texto="Pagina de relatos detalhados" />
            <Left>
                <Titles>Endereço</Titles>
                <br />
                <p>Bairro: Santa luzia </p>
                <br />
                <p>Rua/Avenida: Rua Uruguai</p>
                <br />
                <Titles>Descrição da situação atual</Titles>
                <br />
                <p>
                    Buraco bem em frente a sorveteria marbella, bem na esquina assim as pessoas nao tem a visao dele na
                    hora de virar, assim quase causou 2 acidentes essa semana.
                </p>
                <br />
                <Titles>Imagem da situação atual</Titles>
                <br />
                <img src={Buraco} alt="buraco" width={250} />
                <br />
                <ButtonLeft type="button" onClick={() => setShow(s => !s)}>
                    <ButtonDefault text="Responder Usuario" />
                </ButtonLeft>
            </Left>
            <Right style={{ display: show ? 'block' : 'none' }}>
                <Text>Escreva aqui uma resposta para o usuario</Text>
                <Input type="text" />
                <br />
                <br />
                <ButtonLeft type="button">
                    <ButtonDefault text="Enviar" />
                </ButtonLeft>
            </Right>
        </div>
    );
}

export default ReportScreen;
