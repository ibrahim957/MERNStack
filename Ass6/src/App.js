import './App.css';
import React, { useLayoutEffect, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import MovieList from './pages/movies'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import movieDetails from './pages/movieDetails';
import Login from "./pages/login"
import Signup from "./pages/signup"
import ProtectedRoute from "./hoc"
import { RootContext } from './context/RootContext';

function App() {
  return (
    //<RootContext>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <ProtectedRoute path="/" exact>
            <MovieList></MovieList>
          </ProtectedRoute>
          <ProtectedRoute path="/MovieDetails/:MovieTitle">
            <movieDetails />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    //</RootContext>
  );
}

export default App;
