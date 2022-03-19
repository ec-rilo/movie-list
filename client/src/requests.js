const axios = require('axios');
const API_KEY = 'de07222d4a852ac064d69fa7e114b818';

const formatTitle = (title) => {
  title = title.replace(' ', '%20');
  return title;
}


const fetchMovie = function(title, callback = (response) => {console.log(`No callback!, but your response is ${response}`)}) {
  title = formatTitle(title);
  const query = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`;

  axios.get(query)
  .then((response) => {
    console.log('(./src/requests.js) SUCCESS: Movie Data requested.')
    let movie = response.data.results[0];
    callback(movie);
  })
  .catch((err) => {
    console.log(`(./src/requests.js) - ERROR: ${err}`);
    throw err;
  });
}

export default fetchMovie;