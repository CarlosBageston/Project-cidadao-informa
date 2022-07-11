import Logo from '../../imagens/logo-prefeitura.png';
import Header from '../header/index';
import { Input, Container, Button, Text } from './style';

function ResetPasswordPage() {
    return (
        <>
            <Header texto="Tela recuperação de senha"/>
            <Container>
                <Text>Digite seu email para recuperar a senha</Text>
                <Input placeholder='Digite seu email aqui' type='email' />
                <Button>
                    Continuar
                </Button>
            </Container>
        </>
    );
};

export default ResetPasswordPage;