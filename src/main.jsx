// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from '../src/components/quiz/Quiz.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
