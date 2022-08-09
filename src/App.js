import Index from "./Routes";
import {loadWeb3} from "../src/backend/LandRegistration"
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    loadWeb3();
  })
  return (
    <div>
      <Index/>
    </div>
  );
}

export default App;