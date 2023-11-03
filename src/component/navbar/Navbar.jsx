import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className={styles.header}>
    <div>
      <Link to="/detail" className={styles.link}>Details</Link>
      <Link to="/photos" className={styles.link}>Photos</Link>
      <Link to="/explore" className={styles.link}>Explore</Link>


    </div>
    <div>
      <Link to="/" className={styles.link}>Sign In</Link>
    </div>
  </header>
  );
};
