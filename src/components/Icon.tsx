import type { HTMLAttributes } from "react";
import CurrentIcon from "./icons/CurrentIcon";

export type IconSize = "s" | "m" | "l";
export interface IconProps extends HTMLAttributes<HTMLImageElement> {
  name: string;
  size?: IconSize;
  className?: string;
  color?: string;
}

const SIZE_MAP: Record<IconSize, number> = {
  s: 16,
  m: 20,
  l: 24,
};
// Инструкция к Icon: все иконки управляются через этот HOC,
// все name в файле ICONS.tsx, постфикс "_S" указывает на stroke, в остальных случаях используется fill
// исключение edit-name_F_S тут используется оба свойства управления цветом
// SIZE_MAP для более удобного управления размерами иконок,
// Если иконка не меняет цвет на событиях, просто передаём в пропсы color,
// Если меняет цвет,то color не передаём и управляем цветом через ClassName

export default function Icon({
  name,
  size = "l",
  className = "",
  color,
}: IconProps) {
  const px = SIZE_MAP[size];
  return (
    <CurrentIcon name={name} className={className} px={px} color={color} />
  );
}
