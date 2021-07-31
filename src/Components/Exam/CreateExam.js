import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const CreateExam = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentExam = {
    description: "",
    reading: 0,
    writing: 0,
    listening: 0,
    speaking: 0,
  };

  const saveExam = () => {
    props.save(currentExam);
    setShow(false);
  };

  const statusHandler = (e) => {
    // console.log(e.target.value);
  };
  const textareaHandler = (e) => {
    currentExam.description = e.target.value;
  };
  const du1Handler = (e) => {
    currentExam.reading = e.target.value;
  };
  const du2Handler = (e) => {
    currentExam.writing = e.target.value;
  };
  const du3Handler = (e) => {
    currentExam.listening = e.target.value;
  };
  const du4Handler = (e) => {
    currentExam.speaking = e.target.value;
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <span>Exam managment panel</span>
        <Button variant="primary" onClick={handleShow}>
          Create
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" rows={2} onChange={textareaHandler} />

              <Form.Label className="mt-3">Status:</Form.Label>
              <Form.Select onChange={statusHandler}>
                <option>active</option>
                <option>draft</option>
                <option>close</option>
              </Form.Select>
              <div className="mt-4 row">
                <div className="col-3">
                  <Form.Label>Reading duration:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Reading duration"
                    onChange={du1Handler}
                  />
                </div>
                <div className="col-3">
                  <Form.Label>Writing duration:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Writing duration"
                    onChange={du2Handler}
                  />
                </div>
                <div className="col-3">
                  <Form.Label>Speaking duration:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Speaking duration"
                    onChange={du3Handler}
                  />
                </div>
                <div className="col-3">
                  <Form.Label>listening duration:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="listening duration"
                    onChange={du4Handler}
                  />
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="primary" onClick={saveExam}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateExam;
