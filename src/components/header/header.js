import { useContext } from "react";
import { ThemeContext } from "../../theme-context";
import styles from "./header.module.css";

export function Header() {
  const { theme, themeSetter } = useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <h1 style={{ color: theme.theme.color }}>header</h1>
      <hr />
      <button
        disabled={theme.name === "light"}
        onClick={() => themeSetter("light")}
      >
        light
      </button>
      <button
        disabled={theme.name === "dark"}
        onClick={() => themeSetter("dark")}
      >
        dark
      </button>
    </div>
  );
}
