import { MdDone, MdClose } from "react-icons/md";
import { inube } from "@inubekit/foundations";
import { Stack } from "@inubekit/stack";
import { Label } from "@inubekit/label";
import { IIconAppearance, Icon } from "@inubekit/icon";

import { StyledLabel, StyledInput, StyledSpan, StyledIcon } from "./styles";
import { IToggleSize } from "./props";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface IToggle {
  id: string;
  name?: string;
  value?: string;
  size?: IToggleSize;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  margin: string;
  padding: string;
  disabled?: boolean;
}

const Toggle = (props: IToggle) => {
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

  const theme: typeof inube = useContext(ThemeContext);
  const onIconAppearance: IIconAppearance =
    (theme?.toggle?.on?.icon?.appereance as keyof typeof inube.icon) ||
    inube.toggle.on.icon.appereance;
  const offIconAppearance: IIconAppearance =
    (theme?.toggle?.off?.icon?.appereance as keyof typeof inube.icon) ||
    inube.toggle.off.icon.appereance;
  const interceptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange && onChange(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent={label ? "flex-start" : "flex-start"}
      alignItems="center"
      gap={label ? "10px" : "0px"}
      margin={margin}
      padding={padding}
    >
      <StyledLabel $size={size}>
        <StyledInput
          id={id}
          type="checkbox"
          $size={size}
          value={value}
          checked={checked}
          onChange={!disabled ? interceptChange : () => null}
          $disabled={disabled}
          name={name}
        />
        <StyledSpan $size={size} $disabled={disabled} $checked={checked}>
          <StyledIcon $size={size} $checked={checked} $disabled={disabled}>
            <Icon
              size={size === "small" ? "10px" : "14px"}
              appearance={checked ? onIconAppearance : offIconAppearance}
              disabled={disabled}
              icon={checked ? <MdDone /> : <MdClose />}
            />
          </StyledIcon>
        </StyledSpan>
      </StyledLabel>
      {label && (
        <Label htmlFor={id} disabled={disabled}>
          {label}
        </Label>
      )}
    </Stack>
  );
};

export { Toggle };
export type { IToggle };
