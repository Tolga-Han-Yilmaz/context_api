import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Button = () => {
  const data = useContext(ThemeContext);
  return <div>Button ({data})</div>;
};

export default Button;
