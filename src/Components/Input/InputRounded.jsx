import React from 'react';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  position: relative;
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
  padding: 0px;
  font-size: 16px;
  height: 50px;
  padding:0px 0px 0px 14px;
  font-family: 'Inter';
  border: 2px solid #E5E7EB;
  border-radius: 30px;
`;

const InputRounded = ({ label, ...rest }) => {
  return (
    <StyledInputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} />
    </StyledInputWrapper>
  );
};

export default InputRounded;
