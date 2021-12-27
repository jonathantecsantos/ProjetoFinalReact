import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius:6px;
        width: 100%;
        height: 30px;
        font-weight: 300;

        ::placeholder{
            padding-left:10px;
        }
    }

    button{
        background-color: #ccc;
        padding: 6px;
        margin: 0 6px;
        border-radius: 6px;
        font-weight: bold;
        &:hover{
            box-shadow: 5px 3px 5px rgba(0, 0, 0,0.3);
        }
        span{
            font-weight: bold;
            color: #fff;
            font-size: 14px;
        }
    }

    


`;