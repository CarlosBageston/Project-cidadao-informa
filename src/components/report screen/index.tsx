import { useEffect, useState } from 'react';
import { collection, CollectionReference, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Buraco from '../../imagens/exBuraco.jpg';
import { Input, Text, Left, Titles, ButtonLeft, Imagem, TextUser, Container } from './styled';
import Header from '../header';
import { Relatorios } from '../Home';
import { db } from '../../config/config';

function ReportScreen() {
    const [Item, setItem] = useState<Relatorios>();
    const _collection = collection(db, 'Relatorio') as CollectionReference<Relatorios>;
    const { id } = useParams();

    useEffect(() => {
        const getRelatorio = async () => {
            const data = await getDocs<Relatorios>(_collection);
            const [relatorio] = data.docs.filter(doc => doc.id === id);
            // eslint-disable-next-line no-shadow
            setItem({ ...relatorio.data(), id: relatorio.id });
        };
        getRelatorio();
    }, []);
    // const handleOnCLickId = (id: string | null) => {
    //     setItem(oldItem => {
    //         const newItem = oldItem.map(itens => {
    //             if (itens.id === id) {
    //                 return { ...itens };
    //             }
    //             return itens;
    //         });

    //         return newItem;
    //     });
    // };

    if (!Item) {
        return <div>Nenhum conteudo encontrado</div>;
    }

    return (
        <div>
            <Header texto="Pagina de relatos detalhados" />
            <Container>
                <Left>
                    <Titles>Endereço:</Titles>
                    <br />
                    <TextUser>
                        <p key={Item.id}>Bairro: {Item.Bairro}</p>
                    </TextUser>
                    <br />
                    <TextUser>
                        <p key={Item.id}>Rua/Avenida: {Item.RuaAvenida}</p>
                    </TextUser>
                    <br />
                    <Titles>Descrição da situação atual:</Titles>
                    <br />
                    <TextUser>
                        <p key={Item.id}>{Item.Descricao}</p>
                    </TextUser>
                    <br />
                    <Titles>
                        Imagem da situação atual:
                        <p key={Item.id}>{Item.Imagem}</p>
                    </Titles>
                    <br />
                    <Imagem src={Buraco} alt="buraco" width={250} />
                </Left>
                <Left>
                    <Text>Escreva aqui uma resposta para o usuario</Text>
                    <Input type="text" />
                    <br />
                    <br />
                    <ButtonLeft type="button">Enviar</ButtonLeft>
                </Left>
            </Container>
        </div>
    );
}

export default ReportScreen;
