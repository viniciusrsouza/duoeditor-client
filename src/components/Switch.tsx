import { FC, useCallback } from "react";

interface Props {
  className?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

const Switch: FC<Props> = ({ onChange, value, className }) => {
  const toggleSwitch = useCallback(() => {
    onChange?.(!value);
  }, [onChange, value]);

  return (
    <div
      className={`duo-switch ${className} 
      duo-switch-${value ? "checked" : "unchecked"}`}
      onClick={toggleSwitch}
    >
      <div className="duo-switch-track">
        <div className="duo-switch-handle" />
      </div>
    </div>
  );
};

export default Switch;
