import styled from 'styled-components';

const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 16px; /* add a gap of 8px between rows */

  & tr {
    color: black;
  }

  th,
  td {
    text-align: center;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    height: 48px;
  }

  th {
    font-weight: bold;
  }

  
  button {
    border-radius: 24px;
    transition: background-color 0.3s ease-in-out;
    font-color: black;
    
    &:hover {
      background-color: #1c5fab;
      color: #fff;
    }
  }
  & tbody tr:hover {
    background-color: yellow !important;
  }
`;

const TableRow = styled.tr`
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1c5fab !important;
  }
`;

const TableFather = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export { TableContainer, TableFather, TableRow };
