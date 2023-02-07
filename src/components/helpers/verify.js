export const verifyPrimaryArtist = (artistPopularity) => {
  if (!artistPopularity) return false;

  if (artistPopularity > 40) return false;

  return true;
};

export const isDuplicate = (primaryArtist, artists, currentArtistId) => {
  if (primaryArtist.id === currentArtistId) {
    return true;
  }

  return !artists.every(artist => artist.id !== currentArtistId)
};