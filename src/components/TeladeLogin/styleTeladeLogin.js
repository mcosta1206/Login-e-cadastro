import styled from "styled-components";

export const StyleBoxContainer = styled.div`
    background-color: white;
    width: 40vw;
    height: 60vh;
    min-height: 600px;
    min-width: 300px; 
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

export const StyleButton = styled.button`
    width: 70%;
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
