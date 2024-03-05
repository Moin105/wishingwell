import React from 'react';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  position: relative;
  margin: 14px 0px 14px 0px;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -10px;
  left: 15px;
  font-size: 12px;
  background-color: white;
  padding: 0 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width:320px;
  padding: 0px;
  font-size: 16px;
  height: 50px;
  
  padding:0px 0px 0px 14px;
  font-family: 'Inter';
  border: 2px solid #39d2c0;
  border-radius: 10px;
`;

const CustomInput = ({ label, ...rest }) => {
  return (
    <StyledInputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} />
    </StyledInputWrapper>
  );
};

export default CustomInput;
