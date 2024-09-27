import styled from "styled-components";
import { tokens } from "./Tokens/tokens";

function translateX({ $checked, $size }) {
  const margin = 2;
  if (!$checked) {
    return `translateX(${margin}px)`;
  }

  let containerWidth, toggleWidth;

  if ($size === "small") {
    containerWidth = 32;
    toggleWidth = 12;
    return `translateX(${containerWidth - toggleWidth - margin}px)`;
  } else {
    containerWidth = 40;
    toggleWidth = 16;
    return `translateX(${containerWidth - toggleWidth - margin}px)`;
  }
}

const StyledToggle = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;

  &:before {
    content: "";
    box-sizing: border-box;
    border-radius: 50%;
    transition: 300ms;
    transform: ${translateX};

    width: ${({ $size }) => ($size === "small" ? "12px" : "16px")};
    height: ${({ $size }) => ($size === "small" ? "12px" : "16px")};
    background-color: ${({ theme }) =>
      theme?.toggle?.on?.toggleBackground?.color?.regular ||
      tokens.on.toggleBackground.color.regular};
    border-width: 1px;
    border-style: solid;
    border-color: ${({ $checked, $disabled, theme }) => {
      if ($checked) {
        if ($disabled) {
          return (
            theme?.toggle?.on?.toggleBorder?.color?.disabled ||
            tokens.on.toggleBorder.color.disabled
          );
        } else {
          return (
            theme?.toggle?.on?.toggleBorder?.color?.regular ||
            tokens.on.toggleBorder.color.regular
          );
        }
      } else {
        if ($disabled) {
          return (
            theme?.toggle?.off?.toggleBorder?.color?.disabled ||
            tokens.off.toggleBorder.color.disabled
          );
        } else {
          return (
            theme?.toggle?.off?.toggleBorder?.color?.regular ||
            tokens.off.toggleBorder.color.regular
          );
        }
      }
    }};
  }
`;

const StyledContainer = styled.label`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  width: ${({ $size }) => ($size === "small" ? "32px" : "40px")};
  height: ${({ $size }) => ($size === "small" ? "16px" : "20px")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  background-color: ${({ theme, $disabled, $checked }) => {
    if ($checked) {
      if ($disabled) {
        return (
          theme?.toggle?.on?.background?.color?.disabled ||
          tokens.on.background.color.disabled
        );
      } else {
        return (
          theme?.toggle?.on?.background?.color?.regular ||
          tokens.on.background.color.regular
        );
      }
    } else {
      if ($disabled) {
        return (
          theme?.toggle?.off?.background?.color?.disabled ||
          tokens.off.background.color.disabled
        );
      } else {
        return (
          theme?.toggle?.off?.background?.color?.regular ||
          tokens.off.background.color.regular
        );
      }
    }
  }};

  &:hover {
    background-color: ${({ theme, $disabled, $checked }) => {
      if ($checked) {
        if ($disabled) {
          return (
            theme?.toggle?.on?.background?.color?.disabled ||
            tokens.on.background.color.disabled
          );
        } else {
          return (
            theme?.toggle?.on?.background?.color?.hover ||
            tokens.on.background.color.hover
          );
        }
      } else {
        if ($disabled) {
          return (
            theme?.toggle?.off?.background?.color?.disabled ||
            tokens.off.background.color.disabled
          );
        } else {
          return (
            theme?.toggle?.off?.background?.color?.hover ||
            tokens.off.background.color.hover
          );
        }
      }
    }};
  }
`;

const StyledInput = styled.input`
  display: none;
  width: 0;
  height: 0;
`;

const StyledIcon = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 4px;
  align-items: center;
  justify-content: ${({ $checked }) => ($checked ? "flex-start" : "flex-end")};
`;

export { StyledContainer, StyledInput, StyledToggle, StyledIcon };
