import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchLetterAPI }) => {
  const [search, addSearch] = useState({
    artist: "",
    song: ""
  });

  const updateState = e => {
    addSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const sendInfoToSearch = e => {
    e.preventDefault();
    searchLetterAPI(search);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={sendInfoToSearch}
            className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nombre Artista"
                      onChange={updateState}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre Canción"
                      onChange={updateState}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchLetterAPI: PropTypes.func.isRequired
};

export default Search;
