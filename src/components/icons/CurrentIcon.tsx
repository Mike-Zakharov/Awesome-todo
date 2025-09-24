import { ICONS } from "./ICONS";

type CurrentIconProps = {
  name: keyof typeof ICONS;
  px: number;
  className: string;
  color?: string;
};

export default function CurrentIcon({
  name,
  px,
  className,
  color,
}: CurrentIconProps) {
  const IconComponent = ICONS[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} px={px} color={color} />;
}
