import styled from 'styled-components';

const Wrapper = styled.header`
    display: flex;
    width: 100%;
    height: 84px;
    flex: 1;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    font-family: 'Inter', sans-serif;
    border-bottom: 1px solid var(--greys-primary-100, #E3E3E3);
    background: var(--greys-primary-50, #F7F7F7);
    .page-title{
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .header-actions{
        display: flex;
        align-items: center;
    }
`
export default Wrapper;
