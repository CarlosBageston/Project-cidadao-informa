import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import fundo from '../../imagens/Shapes.png';
import logo from '../../imagens/logo-prefeitura.png';
import { Image, Svg, Svg2, Logo, Title, Box, Form, Input, H1, Button, InputCheckBox, Label, A, P } from './style';

function Login() {
    const navigate = useNavigate();
    const auth = getAuth();
    const [authenticating, setauthenticating] = useState<boolean>(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [erro, seterro] = useState('');

    const loginEmailSenha = async () => {
        setauthenticating(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/Home');
            })
            .catch(() => {
                seterro('E-mail ou senha incorreto');
                setauthenticating(false);
            });
    };

    return (
        <>
            <div className="backgroung">
                <Image src={fundo} alt="imagem" width={800} />

                <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={600}>
                    <path
                        fill="#8A3FFC"
                        d="M40.8,-63C55.7,-53.8,72.8,-47.4,79.9,-35.4C87,-23.5,84.1,-5.9,81.5,11.7C79,29.3,76.7 ,46.9,65.7,53.4C54.6,59.9,34.7,55.3,19.8,53.1C4.9,50.8,-5.1,51,-15.9,49.8C-26.7,48.5,-38.3,45.9,-49.2,39.3C -60.1,32.7,-70.1,22.1,-75.4,8.7C-80.7,-4.7,-81.2,-21,-73.5,-31.8C-65.8,-42.6,-50,-47.8,-36.4,-57.6 C-22.8,-67.5,-11.4,-81.8,0.8,-83C12.9,-84.2,25.8,-72.2,40.8,-63Z"
                        transform="translate(100 100)"
                    />
                </Svg>

                <Svg2 viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={420}>
                    <path
                        fill="#9EF0F0"
                        d="M33.7,-52C43.6,-46.1,51.4,-36.6,55.3,-25.9C59.2,-15.2,59.2,-3.3,60.9,11.2C62.7,25.8,66.3,43.2,59.6,52.7C53,62.3,36.2,64.1,21,66.1C5.8,68.1,-7.7,70.3,-23.5,70.2C-39.3,70.1,-57.2,67.6,-67.1,57.5C-77,47.3,-78.8,29.4,-77.2,13.6C-75.6,-2.3,-70.6,-16.1,-64.5,-29.5C-58.4,-42.9,-51.3,-55.8,-40.4,-61.2C-29.4,-66.6,-14.7,-64.5,-1.4,-62.3C11.9,-60.2,23.9,-57.9,33.7,-52Z"
                        transform="translate(100 100)"
                    />
                </Svg2>

                <Logo src={logo} alt="logo-prefeitura" width={200} />

                <div className="name">
                    <Title>Cidadão informa</Title>
                </div>
            </div>
            <Box className="ScreenLogin">
                <H1>Bem vindo</H1>
                <Form>
                    <Input
                        onChange={e => setemail(e.target.value)}
                        type="text"
                        id="fEmail"
                        name="fEmail"
                        placeholder="Digite seu E-mail"
                        color="#FFF"
                    />
                    <Input
                        onChange={e => setpassword(e.target.value)}
                        type="password"
                        id="fSenha"
                        name="fSenha"
                        placeholder="Digite sua senha"
                    />

                    <InputCheckBox type="checkbox" />
                    <Label htmlFor="chack">Lembre-me</Label>
                    <A href="/reset">Esqueceu a senha?</A>
                    <P>{erro}</P>
                    <Button onClick={() => loginEmailSenha()} disabled={authenticating}>
                        Login
                    </Button>
                </Form>
            </Box>
        </>
    );
}
export default Login;
