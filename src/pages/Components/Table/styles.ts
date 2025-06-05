import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-spacing: 0;
  button{
    cursor: pointer;
    &:first-of-type{
        margin-right: 10px;
    }
  }
  thead {
    border-radius: 10px 10px 0px 0px;
    th {
      background-color: #fff0da;
      text-align: left;
      padding: 5px 10px;
      font-size: 16px;
      font-weight: 500;
      &:first-of-type {
        border-radius: 10px 0px 0px 0px;
      }
      &:last-of-type {
        border-radius: 0px 10px 0px 0px;
      }
    }
  }
  tbody {
    background-color: #ffffff;
    tr {
      &:hover {
        background-color: #f9f9f9;
      }
      td {
        padding: 5px 10px;
        font-size: 16px;
        font-weight: 400;
        border-bottom: 1px solidrgb(240, 240, 240);
      }
    }
  }
`;
