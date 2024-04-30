import {StyleButton, StyleBoxContainer, StyleLogoBox, StyleMainBox, StyleFooterBox, StyleInput, StyleDivSocial, StyleDiv} from "./styleTeladeLogin"
import logo from "../../assets/logo.png"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

function Alerta(){
    alert("Usuário não encontrado!")
}

function TeladeLogin(props){
    return (
        <StyleBoxContainer>
            <StyleLogoBox>
                <StyleDiv>
                    <img className="img-logo"src={logo} alt="logo"/>
                </StyleDiv>
            </StyleLogoBox>
            <StyleMainBox>
                <StyleDiv>
                    <h2>Fazer Login</h2>
                </StyleDiv>
                <StyleDiv>
            
                    <StyleInput type="text" placeholder="DIGITE SEU E-MAIL"/>
                    <StyleInput type="password" placeholder="DIGITE SUA SENHA"/>
                </StyleDiv>
                <StyleDiv>
                    <StyleButton onClick={Alerta}>Login</StyleButton>
                    <p>Não tem cadastro? <a onClick={()=>{props.mudarTela(2)}}>Registre-se</a></p>
                </StyleDiv>
            </StyleMainBox>
            <StyleFooterBox>
                <StyleDiv>
                    <StyleDivSocial>
                    <a href="https://github.com/DanielEmidio1988" target="_blank"><img className="icon-logo-social" src={github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/danielemidio1988/" target="_blank"><img className="icon-logo-social" src={linkedin} alt="linkedin"/></a>
                    </StyleDivSocial>
                </StyleDiv>
            </StyleFooterBox>

        </StyleBoxContainer>
    )
}

export default TeladeLogin