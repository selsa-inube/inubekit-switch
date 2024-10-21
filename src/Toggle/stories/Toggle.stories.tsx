import { Toggle, IToggle } from "..";
import { ToggleController } from "./ToggleController";
import { props, parameters } from "../props";

import { action } from "@storybook/addon-actions";

const story = {
  title: "inputs/Toggle",
  component: Toggle,
  parameters,
  argTypes: {
    ...props,
    onchange: { action: "onChange" },
  },
};

const Default = (args: IToggle) => <ToggleController {...args} />;
Default.args = {
  id: "id",
  disabled: false,
  name: "name",
  value: "value",
  checked: true,
  size: "large",
  onChange: action("checked"),
  margin: "0px",
  padding: "0px",
  children: "Accept Terms & Conditions and Personal Data policy.",
};
export { Default };
export default story;
