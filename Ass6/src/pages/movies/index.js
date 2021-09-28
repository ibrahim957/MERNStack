import { MovieCard } from '../../components/card'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { useFormik } from 'formik';
import * as yup from 'yup';

var axios = require("axios").default;

function Movie() {
  const [Title, setTitle] = useState("");
  const [Poster, setPoster] = useState("");
  const [ide, setIde] = useState(0);
  const [index, setIndex] = useState(-1);
  const [editFlag, setEditFlag] = useState(null);
  const [search, setSearch] = useState("");
  const [searchRes, setResult] = useState([

  ])
  const [data, setData] = useState([
  ])
  const addMovie = () => {
    let temp = [...data]
    temp.push({
      Title,
      Poster,
      ide
    });
    setData(temp);
    setIde(ide + 1);
    setTitle("");
    setPoster("");
  }
  const AddToMovie = (item) => {
    setTitle(item.Title)
    setPoster(item.Poster)
  }
  const editBtn = (item) => {
    setTitle(item.Title);
    setPoster(item.Poster);
    setEditFlag(item);
    setIndex(item.ide);
  }
  const deleteBtn = (item) => {
    let temp = [...data]
    let ind = item.ide;
    temp.splice(ind, 1)
    if (ind === ide - 1) {
      setIde(ind);
    }
    else if (ide != 1) {
      for (let i = ind; i < ide; i++) {
        temp[ind].ide = ind;
      }
      setIde(ide - 1);
    }
    else {
      setIde(0);
    }
    setData(temp);
  }
  const updateMovie = () => {
    let temp = [...data]
    temp[index] = {
      Title,
      Poster,
      ide: index
    }

    setData(temp)
    setTitle("");
    setPoster("");
    setIndex(-1);
    setEditFlag(null);
  }
  const getMovieRequest = async (search) => {
    let url
    if (search !== '') {
      url = `http://www.omdbapi.com/?s=${search}&apikey=b8e3598b`;
    }
    else {
      url = `http://www.omdbapi.com/?s=Harry&apikey=b8e3598b`;
    }
    axios.get(url)
      .then(function (response) {
        if(response.data.Search)
        setResult(response.data.Search);
      })
  };

  useEffect(() => {
    getMovieRequest(search);
  }, [search]);


  return (
    <div className="App">
      <div className="background"></div>
      {/* This is the top navBar */}
      <div >
        <nav className="navbar">
          <h1 className="title margin-left">Movie List</h1>

          <form className="form-inline my-2 my-lg-0 margin-right">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </nav>
      </div>
      {/* This is where the searched movies are shown */}
      <div className="container">
        <h1 className="title margin-left m-3">Search Results</h1>
        <div className="row justify-content-start m-3">
          {
            searchRes.map((movie) =>
              <MovieCard
                Title={movie.Title}
                Poster={movie.Poster}
                AddToMyMovie={(value) => AddToMovie(value)}
              />)
          }
        </div>
      </div>
      {/* This is where i take input of search for the api and title , image url for my own made movies */}
      <div className="input-group my-3">
        <input
          type="textArea"
          className="form-control"
          placeholder="Movie Name"
          value={Title}
          onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="input-group my-3">
        <input
          type="textArea"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Image Link"
          value={Poster}
          onChange={(e) => setPoster(e.target.value)} />
      </div>

      {editFlag ?
        <button className="btn btn-primary" onClick={updateMovie}> Update </button> :
        <button className="btn btn-primary" onClick={addMovie}> Add Movie </button>
      }
      {/* This is where the Favourite movies are shown */}
      <h1 className="title margin-left">Favourite Movies</h1>
      <div className="row mt-2 justify-content-between">
        {
          data.map((movie) =>
            <MovieCard
              Title={movie.Title}
              Poster={movie.Poster}
              ide={movie.ide}
              editMovie={(value) => editBtn(value)}
              deleteMovie={(value) => deleteBtn(value)}
            />)
        }
      </div>
    </div>
  );
}

export default Movie;