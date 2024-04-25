import { useState, useEffect } from "react";

function Hello() {
//   function byFn() {
//     console.log("Im gone :(");
//   }
//   function hiFn() {
//     console.log("Im here :)");
//     return byFn;
//   }
//  useEffect(hiFn, []);
//   return <h1>Hello Ohgeo</h1>;
// }

function byFn() {
  console.log("Im gone :(");
}
function hiFn() {
  console.log("Im here :)");
  return byFn;
}
useEffect(() => {
  console.log("hi :)");
  return () => console.log("bye :)");
}, []); 

// useEffect(function() {
//   console.log("hi :)");
//   return function() {
//     console.log("bye :)");
//   }
// }, []); 

return <h1>Hello Ohgeo</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev); 

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default App;
