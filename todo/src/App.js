import React from 'react';
import TodoForm from "./Components/TodoForm.js"

function App () {
    return (
      <div style = {{ display:"flex", flexDirection:'column', alignItems:'center'}}>
        <h2 className="welcome-h2">Stuff I shouldn't Ignore</h2>
        <TodoForm/>
      </div>
    );
  }


export default App;