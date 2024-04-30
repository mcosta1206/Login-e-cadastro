import TeladeLogin from "./components/TeladeLogin/TeladeLogin";
import TelaCadastroDadosBasicos from "./components/TelaCadastroDadosBasicos/TelaCadastroDadosBasicos";
import TelaCadastroCompleto from "./components/TelaCadastroCompleto/TelaCadastroCompleto";
import TelaCadastroFinalizado from "./components/TelaCadastroFinalizado/TelaCadastroFinalizado";
import styled from "styled-components";
import { useState } from "react";


const StyleContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      `

function App() {

  const [tela, setTela] = useState(1)

  const mudarTela = (valor)=> {
    setTela(valor)
  }

  function renderizaTela (){
    switch(tela){
      case 1:
        return <TeladeLogin mudarTela={mudarTela}/>;
      case 2:
        return <TelaCadastroDadosBasicos mudarTela={mudarTela}/>;
      case 3:
        return <TelaCadastroCompleto mudarTela={mudarTela}/>;
      case 4:
        return <TelaCadastroFinalizado mudarTela={mudarTela}/>;
      default:
        return <TeladeLogin mudarTela={mudarTela}/>
    }
  }

  return (

    <StyleContainer>
    
    {renderizaTela()}
    </StyleContainer>
  );
}

export default App;
