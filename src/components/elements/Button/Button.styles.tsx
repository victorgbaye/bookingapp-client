import styled from "styled-components";

export const DefaultButton = styled.button`
    /* Style */
    background-color:var(--Primary-700,);
    color:var(--Primary-100);
    padding: 10px 32px;
    border-radius: var(--XS);
    border: 1px solid var(--Primary-700);
    /* Layout */
    display: flex;
    height: 44px;
    padding: 10px 32px;
    justify-content: center;
    align-items: center;
    gap: var(--SM, 16px);
`

export const TransparentButton = styled(DefaultButton)`
    border: transparent;
    background-color: transparent;
    color: #7C2C89;

`