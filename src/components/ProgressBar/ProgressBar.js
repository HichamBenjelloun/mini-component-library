/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizeStyles = {
  small: css`
    height: 0.5rem;
  `,
  medium: css`
    height: 0.75rem;
  `,
  large: css`
    height: 1.5rem;
    padding: 4px;
  `,
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  overflow: hidden;

  ${(props) => sizeStyles[props.size]}
`;

const Bar = styled.div`
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
  height: 100%;

  ${({ value }) =>
    value >= 99.8 &&
    css`
      border-radius: 4px;
    `}
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      size={size}
      value={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      max={100}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar
        role="presentation"
        style={{ width: `${value}%` }}
        value={value}
      ></Bar>
    </Wrapper>
  );
};

export default ProgressBar;
