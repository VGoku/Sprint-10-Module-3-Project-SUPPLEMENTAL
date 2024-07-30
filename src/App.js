import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStart, fetchSuccess } from './actions/actionindex';
import GifList from "./components/GifList";
import GifFrom from "./components/GifForm";
import axios from 'axios';
//19:52
function App(props) {
  const { loading, error } = props;

  useEffect( () => {
    props.fetchStart();
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=bplklerlyVDn0VtDyz7qWR9iKajtkCJM&q=dogs")
    .then(res => {
      props.fetchSuccess(res.data.data);
    })
  },[]);

  if (error !== "") {
    return <h3>{error}</h3>
  };

  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <GifFrom />

      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are loading</h3> : <GifList/>
      }

    </div>
  );
}

const mapStateToProps = state => {
return {
  loading: state.loading,
  error: state.error
 }
}



export default connect(mapStateToProps, { fetchStart, fetchSuccess } )(App);