import styled from "styled-components";

export const ContextualMenu = styled.div`
    width: 160px;
    border-radius: 12px;
    background: #f9f7f7;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    right: 40px;
    z-index: 1;
    .context-menu-item{
        padding: var(--XS, 8px) 0px;
        color: #000;
        font-family: Nunito;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
        letter-spacing: 0.238px;

    }
`;