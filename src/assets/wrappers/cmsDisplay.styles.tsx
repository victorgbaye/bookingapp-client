import styled from "styled-components";

const Wrapper = styled.section`
    .cms-display{
        display: grid;
        grid-template-columns: auto 1fr;
    }
    .content{
        padding: 20px;
        display: flex;
        flex: 1;
        width: 100%;
        overflow-y: auto;
        overflow-x: auto;
    }
`
export default Wrapper