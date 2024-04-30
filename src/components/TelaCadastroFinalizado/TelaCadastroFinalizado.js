import { StyleButton, StyleBoxContainer, StyleLogoBox, StyleMainBox, StyleFooterBox, StyleInput, StyleDivSocial, StyleDivCadastro, StyleBoxButton, StyleDiv } from "./styleTelaCadastroFinalizado"
import logo from "../../assets/logo.png"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

import { useState } from "react"

function TelaCadastroFinalizado(props){


    return (
        
        <StyleBoxContainer>
            <StyleLogoBox>
                <StyleDiv>
                    <img class="img-logo"src={logo} alt="logo"/>
                </StyleDiv>
            </StyleLogoBox>
            <StyleMainBox>
                <StyleDiv>
                    <h1>Usuário Cadastrado!</h1>
                </StyleDiv>
                <StyleDiv>
                    <h3>Seja bem vindo! Para acessar nossa página, basta logar com seu usuário e senha.</h3>
                </StyleDiv>

                <StyleBoxButton>
                    <StyleButton onClick={()=>{props.mudarTela(1)}}>Página de Login</StyleButton>
                </StyleBoxButton>
            </StyleMainBox>
            <StyleFooterBox>
                <StyleDiv>
                    <StyleDivSocial>
                    <a href="https://github.com/DanielEmidio1988" target="_blank"><img class="icon-logo-social" src={github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/danielemidio1988/" target="_blank"><img class="icon-logo-social" src={linkedin} alt="linkedin"/></a>
                    </StyleDivSocial>
                </StyleDiv>
            </StyleFooterBox>

        </StyleBoxContainer>
    )
}

export default TelaCadastroFinalizado