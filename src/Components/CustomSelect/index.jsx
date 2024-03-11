import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";

const StyledSelectWrapper = styled.div`
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
  z-index: 10;
`;

const StyledSelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledSelect = styled.select`
  width: 100%;
  font-size: 16px;
  height: 50px;
  padding: 0px 30px 0px 14px; /* Adjust right padding to make space for the icon */
  font-family: 'Inter';
  border: 2px solid #39d2c0;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
  pointer-events: none;
`;

const CustomSelect = ({ label, options, ...rest }) => {
  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelectContainer>
        <StyledSelect {...rest}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <IconWrapper>
          <IoIosArrowDown />
        </IconWrapper>
      </StyledSelectContainer>
    </StyledSelectWrapper>
  );
};

export default CustomSelect;
