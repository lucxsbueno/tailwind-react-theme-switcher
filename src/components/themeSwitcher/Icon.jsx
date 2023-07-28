import { icons } from "lucide-react";

const Icon = ({ name, color, size, fill }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} fill={fill} />;
};

export default Icon;