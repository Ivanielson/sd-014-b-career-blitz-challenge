import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingRotate = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  animation: ${rotate} 2s linear infinite;
  font-size: 2.3rem;
`;

export default LoadingRotate;
