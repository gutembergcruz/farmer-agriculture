import styled from "styled-components";
import icon01 from "../../../assets/icon01.png";
import icon02 from "../../../assets/icon02.png";

export const CardContainer = styled.div`
  width: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 20px;
  height: 170px;
  background-image: url(${icon01});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 160px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  &.hec {
    background-image: url(${icon02});
  }
  h4 {
    color: #8d6e63;
    font-weight: 500;
    font-size: 30px;
  }
  p {
    font-size: 60px;
    color: #3e2723;
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;
