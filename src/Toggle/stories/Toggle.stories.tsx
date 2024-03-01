import { Toggle, IToggle } from "..";
import { ToggleController } from "./ToggleController";
import { props, parameters } from "../props";

import { action } from "@storybook/addon-actions";

const story = {
  title: "inputs/Toggle",
  components: [Toggle],
  parameters,
  argTypes: {
    ...props,
    onchange: { action: "onChange" },
  },
};

export const Default = (args: IToggle) => (
  <ToggleController {...args} onToggleChange={args.onChange} />
);
Default.args = {
  id: "id",
  disabled: false,
  name: "name",
  value: "switchTest1",
  checked: false,
  size: "small",
  onChange: action("checked"),
  margin: "0px",
  padding: "0px",
  label: "",
};

export default story;
