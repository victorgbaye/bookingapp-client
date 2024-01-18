import styled from "styled-components";
import check from '../../../assets/images/check.svg'

export const DefaultInput = styled.input`
    display: flex;
    width: 400px;
    height: 48px;
    padding: var(--XS, 8px) var(--SM, 16px);
    align-items: center;
    gap: var(--XS, 8px);
    align-self: stretch;
    border-radius: var(--XS, 8px);
    border: 1px solid #F8F8F8;
    background: #F8F8F8;
    outline: none;

    ::placeholder{
        color: var(--Grey-001, #A6A6A6);
        font-family: 'Inter';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
    }
`;

export const Label = styled.label`
    color: var(--greys-primary-800, #383838);
    /* Button & Label/Caption */
    font-family: "Open Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    letter-spacing: 0.204px;
    /* text-transform: uppercase; */
`;


//CHECKBOX

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const CheckboxInput = styled.input`
 appearance: none;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border: 1px solid #E3E3E3;
  border-radius: 4px;
  outline: none;

  &:checked {
    background-color: #FDF3FF;
    border-color: #7C2C89;
    
  }

  &::after {
    content: '';
    background-image: url(${check});
    background-size: cover; 
    background-position: center;
    display: inline-block;
    width: 10px; 
    height: 10px;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:checked::after {
    visibility: visible;
  }
`;

export const CheckboxLabel = styled.label`
  /* Move the label to the right of the checkbox */
  margin-left: 8px; /* Adjust spacing as needed */
`;