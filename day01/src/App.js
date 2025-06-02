import Greeting from './component/Greeting.js';
function App() {

  //JSX example
  const name = "Qi He";
  const message = <h1>Hello, {name}!</h1>;
  //we use {} to pass a dynamic value to JSX.
  return (
    // <div>
    //   <header className="Example">
    //     Hello, World! FSD13-React-01 Qi.
    //     <br />
    //     This is a message using JSX: <a onClick="">{message}</a>
    //   </header>
    // </div>
    <>
    <Greeting />
    </>
    //we can use the Greeting component here, which is defined in the Greeting.js file.
  );  
  //we return a single JSX element, this is the rule of JSX. 
  //If we want to return multiple elements, we need to wrap them in a single parent element, like a <div> or a <React.Fragment>.
  //we use className instead of class in JSX
  //we use camelCase for event handlers and attributes in JSX, like onClick instead of onclick.
}
//JavaScript code, but it is written in JSX, which is a syntax extension for JavaScript that looks similar to HTML.
//enables dynamic rendering of UI components in a React application.
export default App;
