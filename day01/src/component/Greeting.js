//components are small, reusable pieces of code that return a React element.
function Greeting() {
  //JSX example
  const name = "Qi He";
  const message = <h1>Hello, {name}!</h1>;
  const isStudent = true; //boolean
  //we use {} to pass a dynamic value to JSX.
  return (
    <div>
      <header className="Example">
        Hello, World! FSD13-React-01 Qi.
        <br />
        This is a message using JSX: {message}
        <h2>Student : {isStudent ? "Yes" : "No"}</h2> 
      </header>
      {/* ?: is a conditional rendering, meaning if true, print yes, if false, print no. */}
    </div>
  );
}
export default Greeting;