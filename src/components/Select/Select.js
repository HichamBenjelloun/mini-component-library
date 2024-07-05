import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { ChevronDown } from 'react-feather';
import { getDisplayedValue } from './Select.helpers';

const StyledSelect = styled.select`
    appearance: none;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    padding: 12px 48px 12px 16px;
    color: inherit;
`;


const Wrapper = styled.div`
    position: relative;
    width: max-content;
    color: ${COLORS.gray700};

    &:hover {
        color: black;
    }
`;

const IconContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 12px;

    display: flex;
    align-items: center;

    pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <IconContainer>
        <ChevronDown size={24} />
      </IconContainer>
    </Wrapper>
  );
};

export default Select;
