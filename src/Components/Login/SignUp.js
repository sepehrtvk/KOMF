import { Card, Button, Form } from "react-bootstrap";
import Background from "../../bg.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import { useContext, useRef } from "react";
import AuthContext from "../../context/auth-context";

const SignUp = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const enteredEmail = useRef();
  const enteredFname = useRef();
  const enteredLname = useRef();
  const enteredPass = useRef();
  const enteredPhone = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const details = {
      fname: enteredFname.current.value,
      lname: enteredLname.current.value,
      email: enteredEmail.current.value,
      phone: enteredPhone.current.value,
      password: enteredPass.current.value,
    };

    console.log(details);

    axios
      .post(`https://api.komf.ir/api/register`, details)
      .then((res) => {
        
        // localStorage.setItem("TOKEN_STORAGE", res.data.token);
        authCtx.login(res.data.token);
        authCtx.setData(
          res.data.data.fname,
          res.data.data.lname,
          res.data.data.phone,
          res.data.data.email,
          res.data.data.role
        );
        history.replace("/Profile");
    })
      .catch((err) => console.log(err));
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
        <Card.Title className="display-6 mt-4 mb-2">Signup Account</Card.Title>
        <Card.Title className="h6 font-weight-light">
          Enter your information
        </Card.Title>
        <Card.Body>
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-4 text-left font-weight-light">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                ref={enteredFname}
              />
            </Form.Group>

            <Form.Group className="mb-4 text-left font-weight-light">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                ref={enteredLname}
              />
            </Form.Group>

            <Form.Group className="mb-4 text-left font-weight-light">
              <Form.Label>Email address </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={enteredEmail}
              />
            </Form.Group>

            <Form.Group className="mb-4 text-left font-weight-light">
              <Form.Label>Phone </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                ref={enteredPhone}
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
                ref={enteredPass}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <p className="mt-4">
            have an account?
            <Link to="/Login" className="ml-2">
              Login{" "}
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
