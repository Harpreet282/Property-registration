// <<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// function ProtectedRoutes() {
//   const [isLog, setIsLog] = useState("");
//   const isLogged = useSelector((state) => state.loginState.authenticated);

//   useEffect(() => {
//     setIsLog(isLogged);
//   });
//   return (
//     <>
//       {isLog === "" ? (
//        ""
//       ) : (
//         <div>{isLogged ? <Outlet /> : <Navigate to="/login" />}</div>
//       )}
//     </>
//   );
// }

// function ProtectedRoutes2() {
//   const [isLog, setIsLog] = useState("");
//   const isLogged = useSelector((state) => state.loginState.authenticated);

//   useEffect(() => {
//     setIsLog(isLogged);
//   });

//   return (
//     <>
//       {isLog === "" ? (
//        ""
//       ) : (
//         <div>{!isLogged ? <Outlet /> : <Navigate to="/" />}</div>
//       )}
//     </>
//   );
// }


// function superAdminProtectedRoutes() {
//   const [isLog, setIsLog] = useState("");
//   const isLogged = useSelector((state) => state.loginState.authenticated);

//   useEffect(() => {
//     setIsLog(isLogged);
//   });

//   return (
//     <>
//       {isLog === "" ? (
//        ""
//       ) : (
//         <div>{!isLogged ? <Outlet /> : <Navigate to="/" />}</div>
//       )}
//     </>
//   );
// }

// export { ProtectedRoutes, ProtectedRoutes2,superAdminProtectedRoutes };
// =======
import React from "react";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const isLogged = useSelector((state) => state.loginState.authenticated);

  return (
    <>
        <div>{isLogged ? <Outlet /> : <Navigate to="/login" />}</div>
    </>
  );
}

function ProtectedRoutes2() {
  const isLogged = useSelector((state) => state.loginState.authenticated);

  

  return (
    <>
  
        <div>{!isLogged ? <Outlet /> : <Navigate to="/" />}</div>
    </>
  );
}



export { ProtectedRoutes, ProtectedRoutes2 };
// >>>>>>> fb0e1dd7c91fc8eacb4b78ed51bca96956356024
