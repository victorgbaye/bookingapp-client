import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: -472px;
    /* Initially hidden outside the viewport */
    width: 432px;
    height: 100vh;
    background-color: #fff;
    transition: right 0.3s ease;
  
    &.open {
      right: 0; /* Slide in the panel from right */
    }
  
    .panel {
      padding: 20px;
  
      .closeBtn {
        background: none;
        // font-size: 20px;
        cursor: pointer;
        background: #EFEFEF;
        padding: 8px;
        border-radius: 100px;
      }
  
      .openBtn {
        margin-top: 20px;
        cursor: pointer;
      }
    }
  .panelHeader{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    p{
      color: #222;
      font-family: 'Nunito';
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%; /* 32px */
      letter-spacing: 0.34px;
    }
  }
  .PanelAction{
    position: absolute;
    // border: 1px solid red;
    bottom: 55px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;