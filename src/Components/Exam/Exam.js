import { Button, Card, Form, Table } from "react-bootstrap";
import CreateExam from "./CreateExam";
import ExamRow from "./ExamRow";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";

const Exam = () => {
  const init = [
    {
      description: "des",
      reading: 10,
      writing: 10,
      listening: 10,
      speaking: 10,
    },
  ];

  const [exams, setExams] = useState(init);
  const saveExam = (newExam) => {
    setExams((prev) => [...prev, newExam]);
  };

  return (
    <>
      <SideBar />
      <div className="m-5" style={{paddingLeft: "275px"}}>
        <CreateExam save={saveExam} />
        <Card>
          <Card.Body>
            <Form className="mb-4">
              <Form.Group className="col-2 d-inline-block">
                <Form.Control type="search" placeholder="Search for ..." />
              </Form.Group>

              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>

            <Table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Duration reading</th>
                  <th>Duration writing</th>
                  <th>Duration listening </th>
                  <th>Duration speaking</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => (
                  <ExamRow
                    description={exam.description}
                    reading={exam.reading}
                    writing={exam.writing}
                    listening={exam.listening}
                    speaking={exam.speaking}
                  />
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Exam;
