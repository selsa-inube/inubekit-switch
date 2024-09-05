const sizes = ["small", "large"] as const;
type IToggleSize = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A toggle switch used to change between enabled or disabled states.",
    },
  },
};

const props = {
  checked: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "Defines whether the toggle is in the checked (enabled) or unchecked (disabled) state.",
    table: {
      defaultValue: { summary: false },
    },
  },
  children: {
    description:
      "Text or elements to be displayed alongside the toggle switch.",
  },
  disabled: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "Disables the toggle switch when set to true, preventing user interaction.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  id: {
    options: ["id"],
    control: { type: "select" },
    description:
      "The unique identifier for the toggle switch. It allows the toggle to be connected to a label.",
  },
  margin: {
    type: { name: "string", required: false },
    description:
      "Sets the outer margin of the toggle in px or global spacing values. Accepts spacing tokens.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  name: {
    options: ["name"],
    control: { type: "select" },
    description:
      "The name of the toggle, used when submitting the value as part of a form.",
  },
  onChange: {
    options: ["logState"],
    control: { type: "func" },
    description:
      "Function that is triggered whenever the toggle's state is modified.",
  },
  padding: {
    type: { name: "string", required: false },
    description:
      "Sets the inner padding of the toggle in px or global spacing values. Accepts spacing tokens.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "Defines the size of the toggle switch. Options are 'small' or 'large'.",
    table: {
      defaultValue: { summary: "small" },
    },
  },
  value: {
    options: ["switchTest1", "switchTest2", "switchTest3", "switchTest4"],
    control: { type: "select" },
    description:
      "The value to be submitted in a form when the toggle is checked.",
  },
};

export { props, parameters };
export type { IToggleSize };
