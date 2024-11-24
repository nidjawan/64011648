// main.jsx
import React from 'react';
import Menu from './menu'; // นำเข้าคอมโพเนนต์เมนู
import './main.css'; // สไตล์ของ MainApp

const MainApp = () => {
  return (
    <div className="main-app">
      <h1>Welcome to Git</h1>
      <Menu /> {/* แสดงเมนู */}
      <p>Nidjawan</p>
    </div>
  );
};

export default MainApp;
