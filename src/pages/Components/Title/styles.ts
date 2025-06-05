import { styled } from "styled-components";

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px auto;
    width: 100%;
    button{
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: #6D4C41;
        padding: 0px 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        &:hover{
            background-color: #3E2723;
        }
    }
    h2{
        font-weight: 500;
    }
`;