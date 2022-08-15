import { collection, getDocs, CollectionReference } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Envelope, EnvelopeOpen } from 'phosphor-react';
import { db } from '../../config/config';
import { Contaner, A, Li, Paragraph, Div } from './Styled';
import Header from '../header';

export interface Relatorios {
    id: string | null;
    bairro: string;
    descricao: string;
    imagem: string;
    rua: string;
    isOpen: boolean;
}

function Home() {
    const [Relatorio, setRelatorio] = useState<Relatorios[]>([]);
    const _collection = collection(db, 'Relatorio') as CollectionReference<Relatorios>;

    useEffect(() => {
        const getRelatorio = async () => {
            const data = await getDocs<Relatorios>(_collection);
            setRelatorio(data.docs.map(doc => ({ ...doc.data(), id: doc.id, isOpen: false })));
        };
        getRelatorio();
    }, []);

    const handleOnCLickOpenRelato = (id: string | null) => {
        setRelatorio(oldRelatos => {
            const newRelatos = oldRelatos.map(relato => {
                if (relato.id === id) {
                    return { ...relato, isOpen: true };
                }
                return relato;
            });

            return newRelatos;
        });
    };
    return (
        <Div>
            <Header texto="Página de relatos recebidos" />
            <Contaner>
                {Relatorio.map(Relato => {
                    return (
                        <div key={Relato.id}>
                            {Relato.isOpen ? (
                                <A href={`/ReportScreen/${Relato.id}`}>
                                    <Li>
                                        <EnvelopeOpen fontSize={35} />
                                        <Paragraph>Novo Relatorio no bairro: {Relato.bairro}</Paragraph>
                                    </Li>
                                </A>
                            ) : (
                                <A href="#" onClick={() => handleOnCLickOpenRelato(Relato.id)}>
                                    <Li>
                                        <Envelope fontSize={35} />
                                        <Paragraph>Novo Relatorio no bairro: {Relato.bairro}</Paragraph>
                                    </Li>
                                </A>
                            )}
                        </div>
                    );
                })}
            </Contaner>
        </Div>
    );
}

export default Home;
