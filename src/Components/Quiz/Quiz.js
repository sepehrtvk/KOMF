import { Button, Card, Form } from "react-bootstrap";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import QuizRow from "./QuizRow";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";

const Quiz = () => {
  const [exams, setExams] = useState([]);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.komf.ir/api/admin/quiz/questions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN_STORAGE")}`,
        },
      })
      .then((res) => {
        setExams(res.data.data);
        setSpin(false);
      })
      .catch((error) => {
        console.error(error);
        setSpin(false);
      });
  },[]);

  return (
    <>
      <SideBar />
      <div className="m-5" style={{ paddingLeft: "275px" }}>
        {/* <CreateExam save={saveExam} /> */}
        <Card>
          {spin && (
            <Spinner animation="border" role="status" className="m-5">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}

          <Card.Body>
            <Form className="mb-4">
              <Form.Group className="col-2 d-inline-block">
                <Form.Control type="search" placeholder="Search for ..." />
              </Form.Group>

              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>

            {exams.map((exam) => (
              <QuizRow
                id={exam.id}
                title={exam.title}
                q1={exam.q1}
                q2={exam.q2}
                q3={exam.q3}
                q4={exam.q4}
                answer={exam.answer}
              />
            ))}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Quiz;
