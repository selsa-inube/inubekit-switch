import { Switch, ISwitchProps } from "..";
import { SwitchController } from "./SwitchController";
import { ThemeProvider } from "styled-components";

import { presente } from "@inubekit/foundations";
import { props, parameters } from "../props";

import { action } from "@storybook/addon-actions";

const story = {
  title: "inputs/Switch",
  components: [Switch],
  parameters,
  argTypes: {
    ...props,
    onchange: { action: "onChange" },
  },
};

export const Default = (args: ISwitchProps) => (
  <SwitchController {...args} onSwitchChange={args.onChange} />
);
Default.args = {
  id: "id",
  disabled: false,
  name: "name",
  value: "switchTest1",
  checked: false,
  size: "small",
  onChange: action("checked"),
  margin: "s0",
  padding: "s0",
  label: "",
};

const theme = {
  ...presente,
};

export const Themed = (args: ISwitchProps) => (
  <ThemeProvider theme={theme}>
    <SwitchController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
