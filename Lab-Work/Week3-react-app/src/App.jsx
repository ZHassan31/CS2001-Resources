import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Registration from './components/Registration';
import './App.css';
export default function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Registration />
    </div>
  );
}
