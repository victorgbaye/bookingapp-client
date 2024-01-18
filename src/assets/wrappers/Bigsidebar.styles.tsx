import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    /* box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1); */
    font-family: 'Open Sans', sans-serif;
    .sidebar-container{
        background: var(--white-secondary-100);
        border-right: 1px solid #E3E3E3;
        min-height: 100vh;
        height: 100%;
        width: 280px;
        padding: 24px 20px;
        display: flex;
        flex-direction: column;
        gap: 60px;



    }
    header{
        padding: 10px 20px;
    }
    footer{
        position: absolute;
        flex: 1;
        bottom: 24px;
        .logout{
            display: flex;
            align-items: center;
            align-self: stretch;
            gap: var(--SM);
            padding: var(--SM);
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
            font-size: 16px;
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
