import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import PhoneBar from './components/PhoneBar/PhoneBar';

const App = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
        <PhoneBar></PhoneBar>
    </div>
  );
};

export default App;