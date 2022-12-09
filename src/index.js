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
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Actors from './pages/Actors';
import Genres from './pages/Genres';


const root = ReactDOM.createRoot(document.getElementById('root'));

const StorageToDoList = withLocalStorage('todolist', ToDoList);
// const StorageTemperatureControl = withLocalStorage('temperaturecontrol', TemperatureControl);

root.render(
    <React.StrictMode>
        <NotificationProvider>
            <NotificationBar />
            {/* <StorageTemperatureControl /> */}
            {/* <StorageToDoList /> */}
            {/* <App /> */}

            <BrowserRouter>
                <Header />
                <div className='container'>
                    <NotificationBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/films'>
                            <Route path=':id' element={<Movie />} />
                        </Route>
                        <Route path='/actors' element={<Actors />} />
                        <Route path='/genres' element={<Genres />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </NotificationProvider>
    </React.StrictMode>
);

reportWebVitals();
