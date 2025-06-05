import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background-color: #FFFDE7;
  border-radius: 5px;
  z-index: 2;
  min-width: 300px;
  border-radius: 10px;
  > div.header-modal {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF0DA;
    border-radius: 10px 10px 0px 0px;
    button {
      background-color: transparent;
      border: none;
      color: red;
      font-size: 30px;
      cursor: pointer;
    }
  }
  > div.body-modal {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  > div.footer-modal {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    button:first-of-type {
        background-color: #fff;
        border: 1px solid #6D4C41;
        color: #6D4C41;
        &:hover{
            background-color: #6D4C41;
            color: #fff;
        }
    }
  }
`;
