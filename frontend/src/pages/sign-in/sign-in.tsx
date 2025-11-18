import { useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router";
import InputBase from "../../components/input-base/input-base";
import styles from "./sign-in.module.css";
import imageSingIn from "../../img/sign-in-img.png";
import { userLogin } from "../../api/auth";
import { useAuthStore } from "../../store/user-store";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useAuthStore((s) => s.setUser);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await userLogin({ email, password });
    if (response) {
      console.log("signin", response.user);

      setUser(response.user);
      navigate("/");
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.input_wrapper}>
          <div className={styles.input_group}>
            <h2>Sign In</h2>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              onKeyDown={handleKeyDown}
            >
              <InputBase
                type="email"
                setInputBaseValue={(val) => setEmail(val as string)}
                placeholder="Enter Email"
              />
              <InputBase
                type="password"
                setInputBaseValue={(val) => setPassword(val as string)}
                placeholder="Enter Password"
              />
              <button type="submit">login</button>
            </form>
          </div>
          <div>
            Don’t have an account?
            <Link to="#"> Create One</Link>
          </div>
        </div>
        <img src={imageSingIn} className={styles.image} loading="lazy" />
      </div>
    </div>
  );
}
