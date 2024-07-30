import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import GifList from "./components/GifList";
import GifFrom from "./components/GifForm";
//19:52
function App(props) {
  const { loading, error } = props;

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

export default connect(mapStateToProps) (App);