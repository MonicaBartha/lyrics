import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Lyrics = ( {lyrics} ) =>  {
    // not show the h2 before search
    if((lyrics).length === 0) return null;

    return (
        <Fragment>
            <h2>Song Lyrics</h2>
            <p className="lyrics"> {lyrics} </p>
        </Fragment>
    )
}


Lyrics.propTypes = {
    lyrics: PropTypes.string.isRequired
}
export default Lyrics;