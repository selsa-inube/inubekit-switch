import { useState } from "react";
import { Toggle, IToggle } from "..";

const ToggleController = (
  props: IToggle & {
    onToggleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
) => {
  const { checked = false, onToggleChange } = props;
  const [toggleChecked, setToggleChecked] = useState(checked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggleChecked(e.target.checked);
    onToggleChange && onToggleChange(e);
  };

  return <Toggle {...props} checked={toggleChecked} onChange={onChange} />;
};

export { ToggleController };
