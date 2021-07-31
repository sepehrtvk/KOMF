import { Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";
import { useHistory } from "react-router";

const SideBar = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();


  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/Login');
  };

  return (
    <Card
      className="py-5 px-4 bg-light"
      sticky
      style={{
        position: "fixed",
        top: "25px",
        left: "25px",
        height: "94vh",
        width: "250px",
      }}
    >
      <Card.Title>Komf</Card.Title>
      <Nav
        variant="pills"
        defaultActiveKey="/home"
        className="flex-column mt-4"
      >
        <Nav.Item>
          {/* <Nav.Link to="/" eventKey="link-0" >Profile</Nav.Link> */}
          <Nav.Link>
            <Link to="/Profile">Profile </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link to="/Login" eventKey="link-1">Exam</Nav.Link> */}
          <Nav.Link>
            <Link to="/Exam">Exam </Link>
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
