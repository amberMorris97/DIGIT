export const verifyPrimaryArtist = (artistPopularity) => {
  if (!artistPopularity) return false;

  if (artistPopularity > 40) return false;

  return true;
};

export const verifyNoDuplicates = (primaryArtist, artists, currentArtistId) => {
  if (primaryArtist.id === currentArtistId) {
    return false;
  }

  if (!artists.filter(artist => artists.id !== currentArtistId)) {
    return false;
  }
};