import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Lyrics from './components/Lyrics';
import Info from './components/Info';
import axios from 'axios';

function App() {

  const [ searchLyric, setSearchLyric ] = useState({});

  const [ lyrics, setLyrics ] = useState('');

  const [ artistInfo, setArtistInfo ] = useState({});

  useEffect( () => {
    if(Object.keys(searchLyric).length === 0) return;

      const callLyricAPI = async () => {
        const { artist, lyric } = searchLyric;
        const urlLyric = `https://api.lyrics.ovh/v1/${artist}/${lyric}`;
        const urlArtist = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

        const [ songLyrics, info ] = await Promise.all([
          axios(urlLyric),
          axios(urlArtist)
        ]);

        setLyrics(songLyrics.data.lyrics);
        setArtistInfo(info.data.artists[0]);
      }
      callLyricAPI();
    
  }, [searchLyric]);
  return (
    <Fragment>
        <Form
          setSearchLyric={setSearchLyric}
        />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Info
              artistInfo={artistInfo}
              />
            </div>
            <div className="col-md-6">
              <Lyrics
                lyrics={lyrics}
              />
            </div>
          </div>
        </div>
    </Fragment>
   
  );
}

export default App;
