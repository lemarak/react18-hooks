import { useContext } from "react";
import themeContext from "../context/theme";

const Button = ({ text, className, ...props }) => {
  const theme = useContext(themeContext);
  return (
    <button {...props} className={`btn btn-${theme} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
