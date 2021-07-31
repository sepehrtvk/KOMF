import { Card } from "react-bootstrap";

const QuizRow = (props) => {
  return (
    <Card className="p-5">
      <Card.Title>
        {props.id + " - "} 
        {props.title}
      </Card.Title>
      <Card.Body>
        <div className="row">
        <div class="form-check col-3">
            <input class="form-check-input" type="radio" value="option1" name="exampleRadios1" />
            <label class="form-check-label" for="exampleRadios1">
            {props.q1}
            </label>
        </div>
        <div class="form-check col-3">
            <input class="form-check-input" type="radio" value="option1" name="exampleRadios1" />
            <label class="form-check-label" for="exampleRadios1">
            {props.q2}
            </label>
        </div>
        <div class="form-check col-3">
            <input class="form-check-input" type="radio" value="option1" name="exampleRadios1" />
            <label class="form-check-label" for="exampleRadios1">
            {props.q3}
            </label>
        </div>
        <div class="form-check col-3">
            <input class="form-check-input" type="radio" value="option1" name="exampleRadios1" />
            <label class="form-check-label" for="exampleRadios1">
            {props.q4}
            </label>
        </div>
        </div>
      </Card.Body>

      <Card.Footer>The Answer is : {props.answer}</Card.Footer>
    </Card>
  );
};

export default QuizRow;
