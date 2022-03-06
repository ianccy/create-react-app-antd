import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  font-size: 16px;
`;

// this is a demo how to use styled component
const CustomButton = ({ children, type, onClick = () => {} }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
