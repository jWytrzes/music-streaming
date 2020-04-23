export const getArtists = async() => {
  const response = await fetch('http://localhost:3001/artists', {
    method: 'GET'
  });
  let result = await response.json();
}