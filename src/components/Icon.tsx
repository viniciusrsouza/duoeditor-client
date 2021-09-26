import { FC } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  name: string;
}

const Icon: FC<Props> = ({ className, name, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className={`duo-icon ${className}`}>
      {name}
    </div>
  );
};

export default Icon;
