import { StyleButton, StyleBoxContainer, StyleLogoBox, StyleMainBox, StyleFooterBox, StyleInput, StyleDivSocial, StyleDivCadastro, StyleBoxButton, StyleDiv } from "./styleTelaCadastroCompleto"
import logo from "../../assets/logo.png"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import perfil from "../../assets/perfil.jpg"
import { useEffect, useState } from "react"

function TelaCadastroCompleto(props){

    const [nomeUsuario, setNomeUsuario] = useState("") //armazenar nome do usuário
    const [apelido, setApelido] = useState("") //armazenar apelido do usuário
    const [dtNascimento, setDtNascimento] = useState("") //armazenar data de nascimento do usuário
    const [fotoPerfil, setFotoPerfil] = useState(perfil)
    // const [novaFoto, setNovaFoto] = useState("") //Variavel que vai receber a nova foto upload
    const [rank, setRank] = useState(icon1)

    function onChangeFotoPerfil (event){
        setFotoPerfil(event.target.value)
    }

    // function onChangeNovaFoto (event){
    //     setNovaFoto(event.target.value)
    // }

    function onChangeNomeUsuario (event){
        setNomeUsuario(event.target.value)
    }

    function onChangeApelido (event){
        setApelido(event.target.value)
    }

    function onChangeDtNascimento (event){
        setDtNascimento(event.target.value)
    }

    function onChangeRank (event){
        setRank(event.target.value)
    }   

    //função que fará a mudança de rank, cada pontuação aumenta o rank
    function mudaRank(){
        let i = 0 //variável que fará o controle da pontuação por cada campo preenchido
        let icon = null //variável para apoio que receberá a "imagem" de icone que será usada para "setar" no setRank
        if (nomeUsuario !== ""){
            i++
        }
        if (apelido !== ""){
            i++
        }
        if (dtNascimento !== ""){
            i++
        }
        switch(i){
            case 1:       
                icon = icon1;
                break; 
            case 2:
                icon = icon2;
                break;
            case 3:
                icon= icon3;
                break;
            default:
                icon=icon1;
                break;
        }
        if(icon){
            setRank(icon)
        }
    }

    useEffect(()=>mudaRank())

    // FUNÇÃO PARA MUDAR FOTO PERFIL (EM ATUALIZAÇÃO)
    // function mudaFoto(){
    //     const atualizaFoto = ""
    //     if(novaFoto !== ""){

    //         atualizaFoto = novaFoto
    //     }
    //     setFotoPerfil(atualizaFoto)
    // }

    return (
        
        <StyleBoxContainer>
            <StyleLogoBox>
                <StyleDiv>
                    <img className="img-logo"src={logo} alt="logo"/>
                </StyleDiv>
            </StyleLogoBox>
            <StyleMainBox>
                <StyleDiv>
                    <h2>Cadastro Completo</h2>
                </StyleDiv>
                <StyleDivCadastro>
                    <div>
                        <p>NOME COMPLETO:</p>
                        <StyleInput type="text" placeholder="DIGITE SEU NOME" value={nomeUsuario} onChange={onChangeNomeUsuario}/>
                        <p>APELIDO:</p>
                        <StyleInput type="text" placeholder="DIGITE SEU APELIDO" value={apelido} onChange={onChangeApelido}/>
                        <p>DATA DE NASCIMENTO:</p>
                        <StyleInput type="text" placeholder="DD/MM/AAAA" value={dtNascimento} onChange={onChangeDtNascimento}/>
                    </div>
                    <div>
                        <img src={fotoPerfil} alt="foto-perfil" onChange={onChangeFotoPerfil} />
                        {/* <input type="file" value={novaFoto} onChange={onChangeNovaFoto} onClick={()=>mudaFoto()}/> */}
                        <img src={rank} alt="preenchimento" value ={rank} onChange={onChangeRank}/>
                    </div>
                </StyleDivCadastro>
                <StyleBoxButton>
                    <StyleButton onClick={()=>{props.mudarTela(2)}}>Voltar</StyleButton>
                    <StyleButton onClick={()=>{props.mudarTela(4)}}>Concluir</StyleButton>
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

export default TelaCadastroCompleto