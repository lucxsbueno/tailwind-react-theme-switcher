import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";
import useTheme from "./utils/hooks/useTheme";

function App() {
  const { theme, prefersDarkScheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 w-full h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl">
        <h1 className="text-3xl mb-5">
          {theme === "light" ? "🌞" : (theme === "dark" || prefersDarkScheme) ? "🌙" : "🌞"}
        </h1>

        <h1 className="text-3xl font-medium mb-3 text-gray-900 dark:text-white">Theme switcher</h1>

        <h2 className="text-xl font-medium mb-5 text-gray-700 dark:text-slate-300">A simple example of theme switcher using <strong className="text-gray-900 dark:text-white">React</strong> & <strong className="text-gray-900 dark:text-white">Tailwindcss</strong></h2>

        <p className="text-md text-gray-700 dark:text-slate-300 mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <p className="text-md text-gray-700 dark:text-slate-300 mb-2">
          Et sunt earum praesentium deserunt tempore, dolor nostrum tempora consectetur. Aliquid, saepe. Odio doloribus ad repellendus laudantium accusamus. Fuga porro iure.
        </p>

        <p className="text-md text-gray-700 dark:text-slate-300 mb-5">
          Pariatur, accusamus labore laborum excepturi quae amet aperiam sunt error tempora possimus ipsam obcaecati doloremque consectetur corrupti nihil!
        </p>

        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;
