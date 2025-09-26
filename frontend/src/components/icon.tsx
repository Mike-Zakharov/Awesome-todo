import type { HTMLAttributes } from "react";
import { ICONS_MAP } from "./icons/config";

export type IconSize = "s" | "m" | "l";
export interface IconProps extends HTMLAttributes<HTMLImageElement> {
  name: keyof typeof ICONS_MAP;
  size?: IconSize;
  className?: string;
  color?: string;
}

const SIZE_MAP: Record<IconSize, number> = {
  s: 16,
  m: 20,
  l: 24,
};
/**
  Инструкция к Icon: все иконки управляются через этот компонент,
  все name в файле ICONS.tsx, постфикс "_S" указывает на stroke, в остальных случаях используется fill
  исключение edit-name_F_S тут используется оба свойства управления цветом
  SIZE_MAP для более удобного управления размерами иконок,
  Если иконка не меняет цвет на событиях, просто передаём в пропсы color,
  Если меняет цвет,то color не передаём и управляем цветом через ClassName
 */
export function Icon({ name, size = "l", className = "", color }: IconProps) {
  const px = SIZE_MAP[size];
  const DinamicIcon = ICONS_MAP[name];

  if (!DinamicIcon) {
    return null;
  }
  return <DinamicIcon className={className} px={px} color={color} />;
}
