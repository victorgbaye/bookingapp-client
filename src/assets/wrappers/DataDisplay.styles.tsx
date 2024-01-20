import styled from "styled-components";

export const DataDisplayWrapper = styled.div`
    header{
        display: flex;
        align-items: flex-start;
        align-self: stretch;
        /* justify-content: space-between; */
        border-radius: var(--XS, 8px);
        border: 0px solid #F1F1F1;
        background: #F9F9F9;
        height: 72px;
        width: 100%;
        /* padding: auto 0; */
        place-items: center;
        color: #212121;
        font-family: 'Inter';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
    }
    header > * {
        padding: 0 32px;
    }
    header > :first-child {
    max-width: 398px; /* Adjust the width as needed */
    width: 398px;
    }
    main{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .row{
        display: flex;
        align-items: flex-start;
        height: 72px;
        border-bottom: 1px solid var(--greys-primary-100, #E3E3E3);
        width: 100%;
        place-items: center;
        color: #212121;
    font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
    }
    .row > * {
        padding: 0 32px;
    }
    .row > :first-child {
    max-width: 398px; /* Adjust the width as needed */
    width: 398px;
    }
    .test{
        display: flex;
        flex: 1;
        justify-content: space-between;
    }
`