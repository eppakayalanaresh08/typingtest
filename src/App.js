import './App.css';

import Typing from "./components/Typing";


const App=()=>(
  <div  className="App">
     <h1 className="test-heading">
            Speed Typing Test
          </h1>

    <p class="test-paragraph">On your fingers lets set Go!</p>
    <div className="app-container">

   <Typing />
   </div>

   </div>
)

export default App;
