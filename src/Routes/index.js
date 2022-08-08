import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddRecords from '../Pages/Add-Records';
import View from '../Pages/View';
import Navbar from '../Components/Navbar';
import Ownership from '../Pages/Ownership';
import CreateUser from '../Pages/Create-User';

const Index = () => {
  return (
    <>
    <Navbar/>
<Routes>
<Route path="/" element={<View />} />
<Route path="/addRecords" element={<AddRecords />} />
<Route path="/ownership" element={<Ownership/>} />
<Route path="/createUser" element={<CreateUser />} />
</Routes>
    </>
  )
}

export default Index