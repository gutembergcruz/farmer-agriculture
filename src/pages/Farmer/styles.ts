import styled from "styled-components";

export const FarmerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div.content {
    width: 800px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 780px) {
    > div.content {
      width: 95%;
    }
  }
`;
