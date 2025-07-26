import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle";
import useThemeSync from "../hooks/useThemeSync";

export default function Layout({
  children,
  className = "",
  onClick = null,
  showToggle = false,
}) {
  useThemeSync();

  return (
    <main className={`w-full h-screen p-3 ${className}`} onClick={onClick}>
      {showToggle && <ThemeToggle />}
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  showToggle: PropTypes.bool,
};
