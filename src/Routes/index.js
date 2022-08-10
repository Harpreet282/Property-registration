import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddRecords from '../Pages/Add-Records';
import View from '../Pages/View';
import Ownership from '../Pages/Ownership';
import CreateUser from '../Pages/Create-User';
import AddAdmin from '../Pages/Add-Admin';
import Login from '../Pages/Login';
import { ProtectedRoutes,ProtectedRoutes2 } from './Protected-Routes';


const Index = () => {
  return (
    <>
<Routes>

<Route element={<ProtectedRoutes2 />}>
<Route path="/login" element={<Login />} />
</Route>

<Route element={<ProtectedRoutes />}>
<Route path="/" element={<View />} />
<Route path="/addRecords" element={<AddRecords />} />
<Route path="/ownership" element={<Ownership/>} />
<Route path="/createUser" element={<CreateUser />} />
<Route path="/addAdmin" element={<AddAdmin />} />
</Route>

</Routes>
    </>
  )
}

export default Index