import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import Login from "../features/login/Login";

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo (2) small.png" alt="logo" className="h-16" />
        {/* <a href={Routes.projects}>Dashboard</a> */}
      </header>
      <button
        className={styles.contactButton}
        onClick={() => alert("Contact us through company@mail.com")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
      <Login />
    </div>
  );
};

export default IssuesPage;
