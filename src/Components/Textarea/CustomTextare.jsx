import React from 'react';
import styled from 'styled-components';

const StyledTextAreaWrapper = styled.div`
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

const StyledTextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  height: auto; 
  padding:14px; 
  font-family: 'Inter';
  border: 2px solid #39d2c0;
  border-radius: 10px;
  resize: vertical;
`;

const CustomTextArea = ({ label, ...rest }) => {
  return (
    <StyledTextAreaWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextArea rows="5" {...rest} />
    </StyledTextAreaWrapper>
  );
};

export default CustomTextArea;
