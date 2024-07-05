import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { ChevronDown } from 'react-feather';

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

const IconWrapper = styled.div`
    pointer-events: none;

    & > svg {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 12px;
        margin: auto;
    }
`;

const Select = ({ label, value, onChange, children }) => {
  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <IconWrapper>
        <ChevronDown size={24} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;
