import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/main-header';
import Title from './components/title/title';
import UploadForm from './components/upload form/upload';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/upload" element={<UploadForm />} />
      </Routes>
    </div>
  );
}

export default App;