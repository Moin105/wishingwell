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
  max-width:320px;
  font-size: 16px;
  height: auto; /* Adjust height based on content */
  margin:0px 0px 0px 11px;
  padding:14px; /* Adjusted to have padding inside the textarea */
  font-family: 'Inter';
  border: 2px solid #39d2c0;
  border-radius: 10px;
  resize: vertical; /* Allows the user to resize the textarea vertically */
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
