import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #FFF0DA;
  display: flex;
  width: 100%;
  >div.content{
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2px auto;
  }

  div.logo {
    width: 200px;
    display: flex;
    align-items: center;
    > img {
      width: 100%;
    }
  }
  nav{
    display: flex;
    gap: 50px;
    a{
        color: #8D6E63;
        &:hover{
            color: #3E2723;
        }
    }
  }
`;
