import styled from "styled-components";

//Painel geral
export const WrapperContext = styled.div`
    display: flex;
    align-items: flex-start;
    border-style: solid;
    border-width: 1px;
    border-radius: 16px;
    border-color:green;
    
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: flex-start;
    div{
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUserName = styled.div`
    display: flex;
    align-items: center;
    h4{
        margin-right:4px;
    }
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: flex-start;
    justify-content: space-between;
    height: auto;
    margin-left: 8px;
    height: 150px;
    margin-top: 12px;

    h1{
        font-size: 30px;
        font-weight: bold;
       
    }
    h5{
        font-size: 16px;
        font-weight: bold;
        
    }
    a{
        color: blue;
        font-weight: bold;
    }
    
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 150px;
    margin: 8px;
`;