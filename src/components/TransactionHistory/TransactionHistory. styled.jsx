import styled from '@emotion/styled';

export const TransactionsTabel = styled.table`
  margin: auto;
  width: 600px;
  background-color: #ede5f5;
  box-shadow: 0 5px 20px #bfbfc5;;
  padding: 50px;
  border-collapse: collapse;
  font-weight: 500;
  font-size: 18px;
  thead {
    text-transform: uppercase;
    background-color: #3b8ba5;
    color: white;
    font-size: 18px;
  }
  tr:nth-child(even) {
    background-color: #fff;
  }
  th,
  td {
    border: 1px solid #d8d8f873;
    padding: 10px;
    text-align: center;
    margin: 100px;
  }
`;

