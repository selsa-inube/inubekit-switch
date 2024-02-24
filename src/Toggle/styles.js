import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const sizes = {
  large: {
    width: "40px",
    height: "20px",
  },
  small: {
    width: "32px",
    height: "16px",
  },
};

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.1s;
  border-radius: 30px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  background: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.toggle?.off?.background?.color?.disabled ||
        inube.toggle.off.background.color.disabled
      : theme?.toggle?.off?.background?.color?.regular ||
        inube.toggle.off.background.color.regular};

  &:hover {
    background-color: ${({ $disabled, theme }) =>
      $disabled
        ? theme?.toggle?.off?.background?.color?.disabled ||
          inube.toggle.off.background.color.disabled
        : theme?.toggle?.off?.background?.color?.hover ||
          inube.toggle.off.background.color.hover};
  }

  &:before {
    position: absolute;
    content: "";
    left: 2px;
    border-radius: 50%;
    transition: 0.3s;
    background-color: ${({ theme }) =>
      theme?.toggle?.on?.toggleBackground?.color?.regular ||
      inube.toggle.on.toggleBackground.color.regular};
    box-sizing: border-box;
    border: ${({ $disabled, theme }) =>
      $disabled &&
      `0.5px solid ${
        theme?.toggle?.on?.toggleBorder?.color?.disabled ||
        inube.toggle.on.toggleBorder.color.disabled
      }`};
    ${({ $size }) => `
      width: ${$size === "small" ? "12px" : "16px"};
      height: ${$size === "small" ? "12px" : "16px"};
      bottom: calc((${$size === "small" ? "16px" : "20px"} - ${$size === "small" ? "12px" : "16px"}) / 2);
    `};
  }
`;

const StyledContainer = styled.label`
  position: relative;
  display: inline-block;
  ${({ $size }) => $size && sizes[$size]};
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ $disabled, theme }) =>
      $disabled
        ? theme?.toggle?.on?.background?.color?.disabled ||
          inube.toggle.on.background.color.disabled
        : theme?.toggle?.on?.background?.color?.regular ||
          inube.toggle.on.background.color.regular};

    &:hover {
      background-color: ${({ $disabled, theme }) =>
        $disabled
          ? theme?.toggle?.on?.background?.color?.disabled ||
            inube.toggle.on.background.color.disabled
          : theme?.toggle?.on?.background?.color?.hover ||
            inube.toggle.on.background.color.hover};
    }
  }

  &:checked + span:before {
    ${({ $disabled, $size }) =>
      !$disabled &&
      `
    left: ${$size === "small" ? `-2px` : `2px`};
    transform: translateX(20px);
  `}
  }
`;

const StyledIcon = styled.div`
  position: inherit;
  top: calc(2px / 2);
  padding-left: 2px;
  ${({ $size, $checked, $disabled }) => `
  width: ${$size === "small" ? "10px" : "14px"};
  height: ${$size === "small" ? "10px" : "14px"};
  left: ${$checked && !$disabled ? "-1px" : "15px"};
`};
`;

export { StyledContainer, StyledInput, StyledSpan, StyledIcon };
