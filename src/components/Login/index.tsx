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

import "./index.css";

import loginData from "../../utils/login.json";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    setError(false);
    const { users } = loginData;
    const user = users.find(
      ({ user, password }) => user === username && password === password
    );
    if (user) {
      history.push({
        pathname: "/dashboard",
        state: {
          role: user.role,
        },
      });
    } else {
      setError(true);
    }
  };
  return (
    <div className="App">
      <h2>Sign In</h2>
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
        {error && <p className="error">Invalid Credentials</p>}
        <Button onClick={handleSubmit}>SignIn</Button>
        <Button onClick={() => history.push("/register")} className="signup">
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default Login;
