import React, {useState} from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Form = ( {setSearchLyric} ) => {

const [ search, setSearch ] = useState({
    artist: '',
    lyric: ''
});

const [ error, setError ] = useState(false);
// input value
const { artist, lyric } = search;

// function for each input to read the content
const updateState = e => {
    setSearch({
        ...search,
        [e.target.name] : e.target.value
    })
}

// apis call
const searchInfo = e => {
    e.preventDefault();
    // validate inputs
    if( artist.trim() === '' || lyric.trim() === '' ) {
        setError(true);
        return;
    }
    // if inputs are valid, error became again false
    setError(false);
    // update state from app.js
    setSearchLyric(search);
}
    return (
      <div className="bg-info">
          { error ? <p className="alert alert-danger text-center p-2">
                      All fields are required.
                  </p> : null }
          <div className="container">
              <div className="row">
                  <form
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    onSubmit={searchInfo}
                  >
                      <fieldset>
                          <legend className="text-center">Search Music Lyrics</legend>
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label>Artist</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="artist"
                                        placeholder="Artist Name"
                                        onChange={updateState}
                                        value={artist}
                                      />
                                  </div>
                              </div>
                              <div className="col-md-6">
                              <div className="form-group">
                                      <label>Lyric</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="lyric"
                                        placeholder="Lyric"
                                        onChange={updateState}
                                        value={lyric}
                                      />
                                  </div>
                              </div>
                          </div>
                          <button
                          type="submit"
                          className="btn btn-primary float-right"
                          >
                              Search
                          </button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

Form.propTypes = {
    setSearchLyric: PropTypes.func.isRequired
}
export default Form;
