import { HeaderConteiner, Image, Title, Svg, Svg2, H1 } from '../Home/Styled';
import Logo from '../../imagens/Logo_CidadaoInforma.png';

export default function Header({ texto }: { texto: string }) {
    return (
        <HeaderConteiner>
            <Image src={Logo} alt="Logo-doisvizinhos" width={165} />
            <Title>Cidadão informa</Title>
            <br />
            <H1>{texto}</H1>
        </HeaderConteiner>
    );
}
