import React from 'react'
import NavBar from "./components/NavBar";
import Todo from  "./components/Todo";

function App(props){
  let title = "My first react app";
  return (

    <div>
<NavBar title={title} />
<main>
<Todo title="Learning react" datetime="23rd March 2022"/>
<Todo title="Premest training" datetime="2nd April 2022"/>
<Todo title="Going to market" datetime="23rd May 2022"/>
<Todo title="Going for an inservice training" datetime="3rd June 2022"/>
<Todo title="Attending an interview" datetime=" 1st July 2022"/>
</main>

    </div>
  );
}

export default App;
