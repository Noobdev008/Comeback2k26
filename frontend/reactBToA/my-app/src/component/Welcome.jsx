
function Welcome(props) {
  
  return (
    <div className="card">
      <h1>Hello, {props.name}!</h1>
      <p>Target Salary: {props.salary}</p>
      <p>Goal: {props.goal}</p>
    </div>
  );
}

export default Welcome;