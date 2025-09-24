import { ICONS_MAP } from "./config";

type CurrentIconProps = {
  name: keyof typeof ICONS_MAP;
  px: number;
  className: string;
  color?: string;
};

export function DinamicIcon({ name, px, className, color }: CurrentIconProps) {
  const IconComponent = ICONS_MAP[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} px={px} color={color} />;
}
