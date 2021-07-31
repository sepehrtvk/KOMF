import { Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";
import { useHistory } from "react-router";
import classes from "./SideBar.module.css";

const SideBar = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/Login");
  };

  return (
    <Card
      sticky
      className={`py-5 px-4 bg-light ${classes.sideBarCard}`}
    >
      <Card.Title>Komf</Card.Title>
      <Nav
        variant="pills"
        defaultActiveKey="/home"
        className="flex-column mt-4"
      >
        <Nav.Item>
          <Nav.Link>
            <Link to="/Profile">Profile </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/Exam">Exam </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/Quiz">Quiz </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div style={{ flexGrow: "1" }}></div>
      <Card.Text className="text-center">
        <Button variant="outline-danger" onClick={logoutHandler}>
          logout
        </Button>
      </Card.Text>
    </Card>
  );
};

export default SideBar;
