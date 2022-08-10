import Login from "./Pages/Login";
import Index from "./Routes";
import {loadWeb3,loadAccount,SignInMetamask} from "../src/backend/LandRegistration"
import { useEffect } from "react";
import {  useSelector } from "react-redux";
import Navbar from "./Components/Navbar";

function App() {
  const isLogged = useSelector((state) => state.loginState.authenticated);
// console.log(isLogged,"logg")

useEffect(()=>{
},[isLogged])

useEffect(()=>{
  loadWeb3();
})

  return (
    <div>
      {
        isLogged? <>
        <Navbar/>
        <Index/>
        </>: <Login/>
    }
     
    </div>
  );
}

export default App;