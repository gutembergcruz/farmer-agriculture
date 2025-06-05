import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    >div.content{
        width: 800px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

export const Flex = styled.div`
    display: flex;
    gap: 20px;
`;