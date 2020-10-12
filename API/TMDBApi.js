const API_TOKEN = "dbb7d058061ff4ce237956b49196b5cc" // variable qui stocke la clef api

export function getFilmsWithApi(text) {
    // La fonction 'getFilmsWithApi' permet d'appeler l'api

  const url = 'https://api.themoviedb.org/3/search/movie/?api_key=' + API_TOKEN + '&language=fr&query=' + text  // constante qui stocke l'url à appeler
  return fetch(url) // fetch est une librairie javascript qui contient 2 options: "then" et "catch"
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name  
}
