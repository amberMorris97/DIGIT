import React from 'react';

const artist_form = ({ artist, genre, url, changeHandler }) => {
  return (
    <form>
        <label>
          Artist: {' '}
          <input type = "text" name="artist" value={artist} onChange={changeHandler}/>
        </label>
        <label>
          Genre: {' '}
          <input type = "text" name="artist" value={genre} />
        </label>
        <label>
          Url: {' '}
          <input type = "text" name="artist" value={url} />
        </label>
      </form>
  );
};

export default artist_form;