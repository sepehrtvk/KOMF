import { Card, Button, Form } from "react-bootstrap";
import classes from "./Auth.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";

const Login = () => {
  const emailInput = useRef();
  const passInput = useRef();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const loginApi = (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const pass = passInput.current.value;
    axios
      .post(`https://api.komf.ir/api/login`, { email: email, password: pass })
      .then((res) => {
        if (res.data.login) {
          localStorage.setItem("TOKEN_STORAGE", res.data.token);
          authCtx.login(res.data.token);
          authCtx.setData(
            res.data.data.fname,
            res.data.data.lname,
            res.data.data.phone,
            res.data.data.email,
            res.data.data.role
          );
          history.replace("/Profile");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes["form-styles"]}>
      <Card style={{ width: "25rem" }} className="text-center">
        <Card.Title className="display-6 mt-4 mb-2">Login Account</Card.Title>
        <Card.Title className="h6 font-weight-light">
          Enter your email and password
        </Card.Title>
        <Card.Body>
          <Form onSubmit={loginApi}>
            <Form.Group
              className="mb-4 text-left font-weight-light"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInput}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 text-left font-weight-light"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passInput}
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
              <Button variant="light" type="submit" className="text-muted">
                Forgot password
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
          <p className="mt-4">
            Don't have an acount yet?
            <Link to="/SignUp" className="ml-2">
              Sign Up{" "}
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
