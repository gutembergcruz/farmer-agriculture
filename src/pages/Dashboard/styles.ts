import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div.content {
    width: 800px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (max-width: 780px) {
    > div.content {
      width: 95%;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 780px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
