import axios from "axios";
import { useState } from "react";
import styles from "./login.module.scss";
import { useRouter } from "next/router";

const Login = () => {
  const Router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      setUser(data);
      Router.push("/dashboard");
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.context}>
        <span className={styles.user}>{user.name}</span>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            className={styles.input}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.button}
            disabled={!username || !password}
            onClick={handleClick}
          >
            {loading ? "Please wait" : "Login"}
          </button>
          <span
            data-testid="error"
            className={styles.button}
            style={{ visibility: error ? "visible" : "hidden" }}
          >
            Something went wrong!
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
