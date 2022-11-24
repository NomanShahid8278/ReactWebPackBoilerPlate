import React, { useState } from "react";
import {
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";

import "../Login/index.css";

const SignUp = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    setError(false);
    if (username === "" || password.length < 8) {
      setError(true);
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  };

  return (
    <div className="App">
      <h2>Sign Up</h2>
      <Form className="form">
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => handleUsername(e)}
          />
          <FormFeedback>
            Uh oh! Looks like there is an issue with your email. Please input a
            correct email.
          </FormFeedback>
          <FormFeedback valid>
            That's a tasty looking email you've got there.
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
        </FormGroup>{" "}
        {error && (
          <p className="error">
            Username should not be empty and Password length should be more then
            8 characters.
          </p>
        )}
        {success && <p className="success">Signup Successfully</p>}
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default SignUp;
