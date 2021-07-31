const ExamRow = (props) => {
  return (
    <tr>
      <td>
        <p className="text-primary">
          {props.description}
        </p>
      </td>
      <td> {props.reading}</td>
      <td> {props.writing}</td>
      <td> {props.listening}</td>
      <td> {props.speaking}</td>
    </tr>
  );
};

export default ExamRow;
