import styled from "styled-components";

import { inube } from "@inubekit/foundations";

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
    border: 0.5px solid
      ${({ $checked, $disabled, theme }) =>
        $checked && !$disabled
          ? theme?.toggle?.on?.toggleBorder?.color?.regular ||
            inube.toggle.on.toggleBorder.color.regular
          : theme?.toggle?.on?.toggleBorder?.color?.regular ||
            inube.toggle.on.toggleBorder.color.regular};
    width: ${({ $size }) => ($size === "small" ? "12px" : "16px")};
    height: ${({ $size }) => ($size === "small" ? "12px" : "16px")};
    bottom: ${({ $size }) =>
      $size === "small"
        ? "calc((16px - 12px) / 2)"
        : "calc((20px - 16px) / 2)"};
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: ${({ $size }) => ($size === "small" ? "32px" : "40px")};
  height: ${({ $size }) => ($size === "small" ? "16px" : "20px")};
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
    left: ${({ $disabled, $size }) =>
      $size === "small" && !$disabled ? `-2px` : `2px`};
    transform: ${({ $disabled }) => !$disabled && " translateX(20px)"};
  }
`;

const StyledIcon = styled.div`
  position: inherit;
  top: calc(2px / 2);
  padding-left: 2px;
  width: ${({ $size }) => ($size === "small" ? "10px" : "14px")};
  height: ${({ $size }) => ($size === "small" ? "10px" : "14px")};
  left: ${({ $size, $checked, $disabled }) => {
    if ($checked && !$disabled) {
      return "-1px";
    } else {
      return $size === "small" ? "14px" : "18px";
    }
  }};
`;

export { StyledLabel, StyledInput, StyledSpan, StyledIcon };
