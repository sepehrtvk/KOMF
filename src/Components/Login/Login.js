import { Card, Button, Form } from "react-bootstrap";
import Background from "../../bg.jpeg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const emailInput = useRef();
  const passInput = useRef();
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

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

      handleShow();
  };

  const setMessage = (str) => {
    if (str !== "") {
      return (
        <Modal.Body>
          Wellcome to KOMF your Logged in with this email :{authCtx.email}
        </Modal.Body>
      );
    } else {
      return <Modal.Body>please enter your information !</Modal.Body>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
              <Button variant="primary" type="submit" onClick={handleShow}>
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

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hi {authCtx.fname}</Modal.Title>
        </Modal.Header>
        {setMessage(authCtx.email)}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
