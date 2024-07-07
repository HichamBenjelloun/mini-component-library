import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const variants = {
  small: {
    iconSize: '1rem',
    fontSize: '0.875rem',
    borderWidth: '1px',
    paddingLeft: '1.5rem',
    paddingBottom: '0.25rem',
    strokeWidth: 1,
  },
  large: {
    iconSize: '1.5rem',
    fontSize: '1.125rem',
    borderWidth: '2px',
    paddingLeft: '2.25rem',
    paddingBottom: '0.5rem',
    strokeWidth: 2,
  },
};

const Wrapper = styled.label`
  position: relative;
  font-size: ${(props) => variants[props.size].fontSize};

  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    color: inherit;
    width: ${(props) => variants[props.size].iconSize};
  }

  input {
    ${(props) =>
      props.width &&
      css`
        width: ${props.width}px;
      `}

    border: none;
    outline-offset: 2px;

    border-bottom: ${(props) => variants[props.size].borderWidth} solid black;
    padding-left: ${(props) => variants[props.size].paddingLeft};
    padding-bottom: ${(props) => variants[props.size].paddingBottom};

    font-size: inherit;
    font-weight: 700;

    color: inherit;

    &::placeholder {
      font-size: inherit;
      font-weight: 400;
      color: ${COLORS.gray500};
      opacity: 1;
    }
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper size={size} width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <input type="text" placeholder={placeholder} />
      <Icon id={icon} strokeWidth={variants[size].strokeWidth} />
    </Wrapper>
  );
};

export default IconInput;
