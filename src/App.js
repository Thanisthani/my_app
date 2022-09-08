
import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./page/Home.js";
import Update from "./page/Update";


  function App() {
  return (
   <div>
<Router>
        <Routes>
          < Route path="/" exact element={<Home />} />   
          < Route path="/edit/:id" exact element={<Update/>} />   
          
          
        </Routes>
      </Router>

   </div>
   
  );
}

export default App;

