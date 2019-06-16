import React, { useState, useEffect, Fragment } from "react";
import Search from "./components/Search";
import Letter from "./components/Letter";
import Info from "./components/Info";
import axios from "axios";

function App() {
  const [artist, addArtist] = useState("");
  const [letter, addLetter] = useState([]);
  const [info, addInfo] = useState({});

  const searchLetterAPI = async search => {
    const { artist, song } = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    const result = await axios(url);
    addArtist(artist);
    addLetter(result.data.lyrics);
  };

  const searchInfoAPI = async () => {
    if (artist) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const result = await axios(url);
      addInfo(result.data.artists[0]);
    }
  };

  useEffect(() => {
    searchInfoAPI();
  }, [artist]);

  return (
    <Fragment>
      <Search searchLetterAPI={searchLetterAPI} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Letter letter={[letter]} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
