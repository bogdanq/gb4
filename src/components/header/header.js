import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context";
import styles from "./header.module.css";

export function Header() {
  const { theme, themeSetter } = useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/gists">Gists</Link>
      </nav>
      <div>
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
    </div>
  );
}
