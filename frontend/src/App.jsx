import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AddEmployee from './pages/AddEmployee';
import RegisterForm from "./pages/RegisterForm"
import LoginForm from './pages/LoginPage';
import { Toaster } from 'react-hot-toast'
import EmployeeList from './pages/EmployeeList';
import Edit from './pages/Edit';
import Form from './pages/form';
import WithDrawalEmployee from './pages/WithDrawalEmployee';



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>

      <div className="flex h-screen bg-gray-100">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/addemployee" element={<AddEmployee />} />
              <Route path='/employeelist' element={<EmployeeList />} />
              <Route path='/form' element={<Form/>}/>
              <Route path='/edit/:id' element={<Edit />} />
              <Route path='/withdrawal' element={<WithDrawalEmployee/>}/>
            </Routes>
          </main>
        </div>
      </div>
      <Toaster position='top-center' />
    </Router>
  );
}

export default App;
