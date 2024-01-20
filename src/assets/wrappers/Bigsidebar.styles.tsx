import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    /* box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1); */
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    .sidebar-container{
        background: var(--white-secondary-100);
        border-right: 1px solid #E3E3E3;
        min-height: 100vh;
        height: 100%;
        width: 216px;
        padding: 24px 20px;
        display: flex;
        flex-direction: column;
        gap: 60px;
        position: relative;
        



    }
    header{
        padding: 10px 20px;
    }
    footer{
        position: absolute;
        flex: 1;
        bottom: 24px;
        color: #515151;
        font-family: "Open Sans";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */
        letter-spacing: 0.204px;
        text-transform: capitalize;
        .logout{
            display: flex;
            align-items: center;
            align-self: stretch;
            gap: var(--SM);
            padding: var(--SM);
            font-size: 14px;
            letter-spacing: 0.272px;
        }
        section{
            display: flex;
            gap: var(--SM);
            padding: var(--XS);
            align-items: center;
        }
    }
    .nav-link{
        display: flex;
        align-items: center;
        padding: var(--SM, 16px);
        /* gap: var(--SM); */
        align-self: stretch;
        height: 44px;
        /* border: 1px solid red; */
        border-radius: var(--XS, 8px);
        p{
            font-size: 14px;
        }

    }
    .nav-link:hover{
        background: #FCECFF;
        cursor: pointer;
    }
    .nav-links{
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-start;
    }
    .icon{
        margin-right: var(--SM);
        display: grid;
        place-items: center;
    }

  }
`;
export default Wrapper;
