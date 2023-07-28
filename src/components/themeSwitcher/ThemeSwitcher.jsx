import useTheme from "../../utils/hooks/useTheme";

import Icon from "./Icon";

const options = [
  {
    theme: "light",
    iconName: "Sun"
  },
  {
    theme: "dark",
    iconName: "Moon"
  },
  {
    theme: "system",
    iconName: "Monitor"
  },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const isActive = (themeOption) => themeOption === theme
    ? "text-cyan-500 fill-cyan-500"
    : "text-gray-800 dark:text-white fill-none";

  return (
    <div className="bg-gray-50 dark:bg-gray-800 inline-block">
      <div className="flex px-3 py-2">
        {options.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setTheme(item.theme)}
              className={`p-2 ${isActive(item.theme)}`}>
              <Icon name={item.iconName} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeSwitcher;