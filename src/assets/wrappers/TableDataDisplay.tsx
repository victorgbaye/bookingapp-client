import styled from "styled-components";
export const TableDataDisplayWrapper = styled.table`
        width: 100%;
        border-collapse: collapse;
        /* margin-top: 20px; */
    thead{
        border-radius: var(--XS, 8px);
        border: 0px solid #F1F1F1;
        background: #F9F9F9;
        height: 72px;
       
    }
    tbody{
        color: #212121;
        font-family: 'Inter';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
    }

    th{
        text-align: left;
        color: #212121;
        font-family: 'Inter';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */

    }
    td{
        height: 72px;
    }
    th, td{
        padding: 0 32px;
    }
    td tr > * {
        padding: 0 32px;
    }
    td tr > :first-child {
    max-width: 398px; /* Adjust the width as needed */
    width: 398px;
    }
    .test{
        
    }
    .name{
        font-weight: 600;
    }
    .status{
        display: flex;
        margin: 21px 0;
        padding: 4px 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: var(--XS, 8px);
        width: 70px;
        
    }
`
interface BookingStatusProps {
    variant: 'Pending' | 'Accepted' | 'Cancelled' | string;
  }
export const BookingStatus = styled.button<BookingStatusProps>`
    display: flex;
    margin: 21px 0;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: var(--XS, 8px);
    background: ${(props) =>
  props.variant === 'Pending'
    ? '#FFF7EC'
    : props.variant === 'Accepted'
    ? '#E1FFE4'
    : props.variant === 'Cancelled'
    ? '#fbd4d4'
    : ''};
    width: 70px;
    outline: none;
    border: none;
    color: #212121;
    font-family: 'Inter';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
`