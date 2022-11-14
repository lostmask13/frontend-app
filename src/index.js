import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './todolist.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoList from './ToDoList';;
// import TemperatureControl from './TemperatureControl';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TemperatureControl /> */}
    <ToDoList />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
