const ExamRow = (props) => {
  return (
    <tr>
      <td>
        <a href="/home" className="text-decoration-none">
          {props.description}
        </a>
      </td>
      <td> {props.reading}</td>
      <td> {props.writing}</td>
      <td> {props.listening}</td>
      <td> {props.speaking}</td>
    </tr>
  );
};

export default ExamRow;
