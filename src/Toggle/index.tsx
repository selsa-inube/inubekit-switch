import { MdDone, MdClose } from "react-icons/md";
import { Label } from "@inubekit/label";
import { IIconAppearance, Icon } from "@inubekit/icon";
import {
  StyledContainer,
  StyledInput,
  StyledToggle,
  StyledIcon,
} from "./styles";
import { IToggleSize } from "./props";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { tokens } from "./Tokens/tokens";
import { Grid } from "@inubekit/grid";

interface IToggle {
  id?: string;
  name?: string;
  value?: string;
  size?: IToggleSize;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  margin?: string;
  padding?: string;
  disabled?: boolean;
}

const Toggle = (props: IToggle) => {
  const {
    disabled = false,
    id = "toggle",
    name,
    value,
    size = "large",
    checked = false,
    onChange,
    children,
    margin = "0px",
    padding = "0px",
  } = props;

  const theme = useContext(ThemeContext) as { toggle: typeof tokens };
  const onIconAppearance = (theme?.toggle?.on?.icon?.appereance ||
    tokens.on.icon.appereance) as IIconAppearance;
  const offIconAppearance = (theme?.toggle?.off?.icon?.appereance ||
    tokens.off.icon.appereance) as IIconAppearance;

  const interceptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange && onChange(e);
    } catch (error) {
      console.error(`Error when changing toggle value. ${error}`);
    }
  };

  return (
    <Grid
      templateColumns="auto 1fr"
      alignItems="center"
      margin={margin}
      padding={padding}
      gap="8px"
    >
      <StyledContainer $size={size} $checked={checked} $disabled={disabled}>
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
        <StyledToggle $size={size} $checked={checked} $disabled={disabled} />
        <StyledIcon $size={size} $checked={checked} $disabled={disabled}>
          <Icon
            size={size === "small" ? "10px" : "14px"}
            appearance={checked ? onIconAppearance : offIconAppearance}
            disabled={disabled}
            icon={checked ? <MdDone /> : <MdClose />}
          />
        </StyledIcon>
      </StyledContainer>
      {children && (
        <Label
          htmlFor={id}
          disabled={disabled}
          size={size === "small" ? "medium" : "large"}
        >
          {children}
        </Label>
      )}
    </Grid>
  );
};
export { Toggle };
export type { IToggle };
