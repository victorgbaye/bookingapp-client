import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  text-align: center;

  table {
    width: 100%;
    /* border-collapse: collapse; */
    margin-top: 10px;
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
  }

  td {
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  button {
    cursor: pointer;
    padding: 5px 10px;
    margin: 0 5px;
  }
`;