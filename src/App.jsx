import React from 'react';
import { useSelector } from 'react-redux';
import { publicRoutes } from '../mains/router/publicRoutes';
import { privateRoutes } from '../mains/router/privateRoutes';
import { allRoutes } from '../mains/router/allRoutes';
import { Route, Routes } from 'react-router';
import {ToastContainer} from 'react-toastify';
import './App.css';
import Header from '../Components/Main/Header';

const App = () => {
  const user = useSelector(state => state.user);
  return (
    <>
      <ToastContainer />
      <Header/>
      {
        user.auth === true ?
          <Routes>
            {[...allRoutes].map(({path,Page}) => (
              <Route path={path} element={<Page/>} /> 
            ))}
          </Routes>
          :
          <Routes>
            {[...allRoutes].map(({path,Page}) => (
              <Route path={path} element={<Page/>} /> 
            ))}
          </Routes>
      }
    </>
  );
};

export default App;