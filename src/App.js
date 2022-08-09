import Login from "./Pages/Login";
import Index from "./Routes";
import {  useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const isLogged = useSelector((state) => state.loginState.authenticated);
console.log(isLogged,"logg")
useEffect(()=>{
},[isLogged])
  return (
    <div>
      {
        isLogged? <Index/>: <Login/>
    }
     
    </div>
  );
}

export default App;