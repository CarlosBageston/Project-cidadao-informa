import { BrowserRouter } from 'react-router-dom';
import Routesfunction from './Routes';
import GlogalStyle from './StyleGlobal';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routesfunction />
            </BrowserRouter>
            <GlogalStyle />
        </>
    );
}

export default App;
