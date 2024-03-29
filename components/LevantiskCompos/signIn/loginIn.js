import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./login.module.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={style.contactContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className={style.lable}>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className={style.lable}>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block="true"
          size="lg"
          type="submit"
          disabled={!validateForm()}
          className={style.btn}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
