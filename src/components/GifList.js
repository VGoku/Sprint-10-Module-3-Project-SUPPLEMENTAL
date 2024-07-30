import React from "react";
import { connect } from "react-redux";
import Gif from "./Gif";
import gifs from './../data/gifs'

const GifList = props => {
    const { gifs } = props;
  
    return (
      <div id="gifList">
        {
          gifs.map(gif => {
            return <Gif key={gif.id} gif={gif} />; // Add the key prop here
          })
        }
      </div>
    );
  };

const mapStateToProps = state => {
    return {
        gifs: state.gifs
    }
};


export default connect(mapStateToProps) (GifList);