import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './todolist.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoList from './ToDoList';
// import TemperatureControl from './TemperatureControl';
import withLocalStorage from './withLocalStorage'
import { NotificationProvider } from './context/NotificationContext';
import NotificationBar from './components/NotificationBar';

const root = ReactDOM.createRoot(document.getElementById('root'));

const StorageToDoList = withLocalStorage('todolist', ToDoList);
// const StorageTemperatureControl = withLocalStorage('temperaturecontrol', TemperatureControl);

root.render(
  <React.StrictMode>
    <NotificationProvider>
      <NotificationBar />
      {/* <StorageTemperatureControl /> */}
      <StorageToDoList />
      {/* <App /> */}
    </NotificationProvider>
  </React.StrictMode>
);

reportWebVitals();
