import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div>header : ({theme}) </div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Header
      </button>
    </div>
  );
};

export default Header;
