import { VFC } from "react";

type ButtonType = "primary" | "secondary" | "error";

type Props = {
  title: string;
  onClick: string;
  type?: ButtonType;
  width?: number;
};

export const Button: VFC<Props> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};
