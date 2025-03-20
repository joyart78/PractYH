import { Nav } from "@/widgets/nav";
import { Outlet } from "react-router";
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <header>
        <Nav />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
