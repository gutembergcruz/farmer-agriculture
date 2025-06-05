import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  > label {
    color: #3e2723;
  }
  > input, select {
    background-color: #ffffff;
    border-radius: 5px;
    color: #000000;
    height: 30px;
    padding: 0 10px;
    width: 100%;
    border: 1px solid #f8f8f8;
  }
`;
