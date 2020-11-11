import React, {Fragment} from 'react';

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


export default Lyrics;