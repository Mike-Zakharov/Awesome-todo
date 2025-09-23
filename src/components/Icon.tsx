import type { HTMLAttributes } from "react";
import CurrentIcon from "./icons/CurrentIcon";

export type IconSize = "s" | "m" | "l";
export interface IconProps extends HTMLAttributes<HTMLImageElement> {
  name: string;
  size?: IconSize;
  className?: string;
}

const SIZE_MAP: Record<IconSize, number> = {
  s: 16,
  m: 20,
  l: 24,
};
// Инструкция к Icon: все иконки со свойством fill управляются через этот HOC,
// все name в файле ICONS.tsx,
// SIZE_MAP для более удобного управления размерами иконок,
// В ClassName уже входит базовый класс, цвет назначаем в отдельном классе
// через который удобно будет управлять цветом при событиях

export default function Icon({ name, size = "l", className = "" }: IconProps) {
  const px = SIZE_MAP[size];
  return <CurrentIcon name={name} className={`${className} icon`} px={px} />;
}
