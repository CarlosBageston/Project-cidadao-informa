import { Botao } from './style';

export default function ButtonDefault({ text }: { text: string }) {
    return <Botao type="button">{text}</Botao>;
}
