import { Container, Row, Col, Card } from "react-bootstrap";
import Auth from "../../context/auth-context";
import { useContext } from "react";
import SideBar from "../SideBar/SideBar";

const Profile = () => {
  const auth = useContext(Auth);

  return (
    <>
      <SideBar />
      <Container  style={{paddingLeft: "275px"}}>
        <Row className="justify-content-md-center mt-5">
          <Col className="col-md-6">
            <Card>
              <Card.Text className="align-items-start ml-2 p-3 text-muted">
                <h5 className="mb-3 text-dark">{`${auth.fname} ${auth.lname}`}</h5>
                <p>{auth.email}</p>
                <p>{auth.phone}</p>
                <p>{auth.role}</p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
