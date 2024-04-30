import {StyleButton, StyleBoxContainer, StyleLogoBox, StyleMainBox, StyleFooterBox, StyleInput, StyleDivSocial, StyleBoxButton, StyleDiv} from "./styleTelaCadastroDadosBasicos"
import logo from "../../assets/logo.png"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import { useState } from "react"

function TelaCadastroDadosBasicos(props){
    const [email, setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")

    function ValidaSenha(){
        if (senha !== confirmaSenha){
            alert("Senhas divergentes!")
        }else{
            props.mudarTela(3) 
        }

    }

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangeSenha(event){
        setSenha(event.target.value)
    }

    function onChangeConfirmaSenha(event){
        setConfirmaSenha(event.target.value)
    }

    return (
        <StyleBoxContainer>
            <StyleLogoBox>
                <StyleDiv>
                    <img className="img-logo"src={logo} alt="logo"/>
                </StyleDiv>
            </StyleLogoBox>
            <StyleMainBox>
                <StyleDiv>
                    <h2>Cadastro de Usuário</h2>
                </StyleDiv>
                <StyleDiv>
                    <p>ENDEREÇO DE E-MAIL:</p>
                    <StyleInput type="text" placeholder="ENDEREÇO DE E-MAIL" value={email} onChange={onChangeEmail}/>
                    <p>DIGITE UMA SENHA:</p>
                    <StyleInput type="password" placeholder="DIGITE UMA SENHA" value={senha} onChange={onChangeSenha}/>
                    <p>CONFIRME SUA SENHA:</p>
                    <StyleInput type="password" placeholder="CONFIRME SUA SENHA"value={confirmaSenha} onChange={onChangeConfirmaSenha}/>

                </StyleDiv>
                <StyleBoxButton>
                    <StyleButton onClick={()=>{props.mudarTela(1)}}>Voltar</StyleButton>
                    <StyleButton onClick={()=>ValidaSenha()}>Avançar</StyleButton>
                </StyleBoxButton>
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

export default TelaCadastroDadosBasicos