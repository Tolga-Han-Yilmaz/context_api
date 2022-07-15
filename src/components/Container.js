import Button from "./Button";
import Header from "./Header";
import { useTheme } from "../context/ThemeContext";
import User from "./User";

const Container = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Button />
      <Header />
      <hr />
      <br />
      <User />
    </div>
  );
};

export default Container;
