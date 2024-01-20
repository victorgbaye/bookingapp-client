import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #000;

    /* Body/Paragrapgh (Small) */
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.238px;
    .schedule-flex{
        display: flex;
        align-items: center;
        width: 582px;
        max-width: 582px;
        justify-content: space-between;
    }
    .schedule{
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        margin-top: 48px;
    }
    .availability{
        display: flex;
        align-items: center;
        gap: 24px;
    }
`