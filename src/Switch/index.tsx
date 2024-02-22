import { MdDone, MdClose } from "react-icons/md";
import { inube } from "@inubekit/foundations";
import { Stack } from "@inubekit/stack";
import { Label } from "@inubekit/label";
import { Icon } from "@inubekit/icon";

import { StyledContainer, StyledInput, StyledSpan, StyledIcon } from "./styles";
import { Size } from "./props";

export interface ISwitchProps {
  id: string;
  name?: string;
  value?: string;
  size?: Size;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  margin: string;
  padding: string;
  disabled?: boolean;
}

export const Switch = (props: ISwitchProps) => {
  const {
    disabled = false,
    id,
    name,
    value,
    size = "small",
    checked = false,
    onChange,
    label,
    margin = "0px",
    padding = "0px",
  } = props;

  const appearance = disabled
    ? inube.toggle.off.icon.appereance
    : inube.toggle.on.icon.appereance;

  return (
    <Stack
      direction={"row"}
      justifyContent={label ? "flex-start" : "flex-start"}
      alignItems="center"
      gap={label ? "10px" : "0px"}
      margin={margin}
      padding={padding}
    >
      <StyledContainer $size={size}>
        <StyledInput
          id={id}
          type="checkbox"
          $size={size}
          value={value}
          checked={checked}
          onChange={onChange}
          $disabled={disabled}
          name={name}
        />
        <StyledSpan $size={size} $disabled={disabled} $checked={checked}>
          {checked && !disabled ? (
            <StyledIcon $size={size} $checked={true} $disabled={disabled}>
              <Icon
                size={size === "small" ? "10px" : "14px"}
                appearance={appearance}
                icon={<MdDone />}
              />
            </StyledIcon>
          ) : (
            <StyledIcon $size={size} $checked={false} $disabled={disabled}>
              <Icon
                size={size === "small" ? "10px" : "14px"}
                appearance={appearance}
                icon={<MdClose />}
              />
            </StyledIcon>
          )}
        </StyledSpan>
      </StyledContainer>
      {label && (
        <Label htmlFor={id} disabled={disabled}>
          {label}
        </Label>
      )}
    </Stack>
  );
};
