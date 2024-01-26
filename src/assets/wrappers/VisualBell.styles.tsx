import styled, { keyframes } from "styled-components";

// Define the keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const VisualBell = styled.p`
  position: fixed;
  bottom: 75px;
  left: 50%;
  height: 36px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  padding: 6px 16px;
  background-color: black;
  color: #fff;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  border-radius: 8px;
  transform: translate(-50%, 0%);
  animation: ${fadeIn} 0.5s ease-in-out; // Apply the fade-in animation
`;

// If you want to use the same animation globally, you can define it separately
// and reuse it in multiple styled components.
