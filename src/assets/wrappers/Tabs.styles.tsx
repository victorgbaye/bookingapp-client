import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid #E3E3E3;
  padding: 20px;
  padding-bottom: 0;
  /* .tab-content{
        display: flex;
        flex: 1;
        width: 100%;
    } */
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  padding-bottom: 12px;
  border: none;
  border-bottom: ${(props) => (props.isActive ? '2px solid #7C2C89' : 'transparent')};
  cursor: pointer;
  background: transparent;

  &:hover {
    /* background-color: #eee; */
  }
`;

export const TabContent = styled.div`
  /* margin-top: 16px; */
        padding: 0 20px;
        display: flex;
        flex: 1;
        width: 100%;
`;