import React, { useState } from "react";
import styles from  "./SigninPage.module.css";

export const SigninPage = () => {
  const [form, setForm] = useState({
    Email: "",
    Password: "",
    userName: "",
  });

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.formCase} onSubmit={onSubmitHandler}>
          <h1
            style={{ marginTop: "1rem", color: "#4f0024", fontSize: "2.3rem" }}
          >
            SIGN IN
          </h1>
          <label htmlFor="userName"> User Name</label>
          <input
            type="text"
            name="useName"
            value={form.userName}
            placeholder="User Name"
            className={styles.inputBox}
            onChange={onChangeHandler}
          />
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="Email"
            value={form.Email}
            placeholder="Enter Email"
            className={styles.inputBox}
            onChange={onChangeHandler}
          />
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="Password"
            value={form.Password}
            placeholder="Enter Password"
            className={styles.inputBox}
            onChange={onChangeHandler}
          />
          <button className={styles.loginBtn}>Sign In</button>
          <div className={styles.para}></div>
        </form>
      </div>
    </>
  );
};

