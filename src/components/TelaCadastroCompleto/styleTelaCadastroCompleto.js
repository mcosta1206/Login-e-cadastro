import styled from "styled-components"

export const StyleBoxContainer = styled.div`
    background-color: white;
    min-height: 700px;
    height: 70vh;
    width: 60vw;
    min-width: 360px; 
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    align-items: center; 
    border-radius: 8px;
    border: 2px solid #ffffff30;
    box-shadow: 1px 1px 6px #EBEBEA; 
`

export const StyleLogoBox = styled.div`
    width: 100%;
`

export const StyleMainBox = styled.div`
    width: 100%;
`

export const StyleFooterBox = styled.div`
    width: 100%;
`
export const StyleBoxButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 8vh;
`

export const StyleButton = styled.button`
    width: 25%;
    height: 40px;
    background-image: linear-gradient(45deg, #F88050 0%, #FF3B3B 50%);
    border-color: #F8CEA1;
    border-radius: 8px;
    color: white;

    :hover{
        cursor: pointer;
        background-color:#F88050;
        background-image: none;     
    }

    :active{
        cursor: pointer;
        background-color:#FF3B3B;
        background-image: none;
        color: black;  
    }
`

export const StyleInput = styled.input`
    background-color: #EBEBEA;
    border-radius: 4px;
    width: 70%;
    height: 40px;
    border: 1px #EAEAE9 solid;
    padding-left: 2vw;
    color: #ABABAA;
 

    :hover{
        background-color: #E3E3E3;
        border: 1px green solid;
        color: #717171;   
    }

    :active{
        background-color: #E3E3E3;
        border: 1px green solid;
        color: #717171;   
    }
`

export const StyleDiv = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 100%; 
    min-height: 12vh;
    gap: 10px;

    .img-logo{
        height: 100px;
        width: auto;
    }
`

export const StyleDivCadastro = styled.div`
    display: flex;
    justify-content: center;


    div:first-child{
        width: 65%;
    }

    div:last-child{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        
        img:first-child{
            width: 14vw;
            min-width: 100px;
            border-radius: 50%;
            border: 3px solid #E3E3E3;
        }
        img:last-child{
            width: 5vw;
            min-width: 40px;
        }


    }
    @media screen and (max-device-width: 500px){
        flex-direction: column-reverse;
        gap: 20px;
        width: 90%;

        div:first-child{
            width: 100%;
            justify-content: center;
        }

        div:last-child{
            width: 100%;
            justify-content: center;
        }
    }
`
export const StyleDivSocial = styled.div`
    display: flex;
    gap: 20px;
    
    img{
        width: auto;
        height: 28px;
        transition: transform .3s;
    }
    
    img:hover{
        cursor: pointer;
        transform: scale(1.2);
    }`
