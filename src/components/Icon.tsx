import type { HTMLAttributes } from "react";
import CurrentIcon from "./icons/CurrentIcon";

export interface IconProps extends HTMLAttributes<HTMLImageElement> {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 20, className = "" }: IconProps) {
  return <CurrentIcon name={name} className={className} px={size} />;
}
