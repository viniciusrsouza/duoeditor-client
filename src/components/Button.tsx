import { FC } from "react";

type ButtonStyle = "default" | "icon" | "text";

type ButtonVariant = "primary" | "secondary";

interface Props {
  label?: string;
  icon?: string;
  style?: ButtonStyle;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  label = "",
  icon = "",
  style = "default",
  variant = "primary",
  onClick = () => {},
}) => {
  return (
    <button
      className={`duo-button duo-button-${style} duo-button-${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
