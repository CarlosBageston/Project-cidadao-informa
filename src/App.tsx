import Routesfunction from "./Routes";
import { BrowserRouter} from "react-router-dom";
import GlogalStyle from "./StyleGlobal";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routesfunction/>
      </BrowserRouter>
    <GlogalStyle/>
    </>
  )
}

export default App
