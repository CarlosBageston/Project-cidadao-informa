import { collection, getDocs, CollectionReference } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Envelope, EnvelopeOpen } from 'phosphor-react';
import { db } from '../../config/config';
import { Contaner, A, Li } from './Styled';
import Header from '../header';

export interface Relatorios {
    id: string | null;
    Bairro: string;
    Descrição: string;
    Imagem: string;
    RuaAvenida: string;
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
        <>
            <Header texto="Pagina de relatos recebidos" />
            <Contaner>
                {Relatorio.map(Relato => {
                    return (
                        <div key={Relato.id}>
                            {Relato.isOpen ? (
                                <A href="/ReportScreen">
                                    <Li>
                                        <EnvelopeOpen /> Novo Relatorio no bairro: {Relato.Bairro}
                                    </Li>
                                </A>
                            ) : (
                                <A href="#" onClick={() => handleOnCLickOpenRelato(Relato.id)}>
                                    <Li>
                                        <Envelope /> Novo Relatorio no bairro: {Relato.Bairro}
                                    </Li>
                                </A>
                            )}
                        </div>
                    );
                })}
            </Contaner>
        </>
    );
}

export default Home;
