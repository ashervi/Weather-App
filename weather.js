
let appId = 'd2ae92f577727ca8cf83ec886829aa50';
let units = 'imperial';
let searchMethod = 'zip';

function getSearchMethod(searchTerm){
  if(searchTerm.length === Number.parseInt(searchTerm) + '' === searchTerm)
    searchMethod = 'zip';
    else {
      searchMethod = 'q'
    }
}

function searchWeather(searchTerm){
  getSearchMethod(searchTerm);
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  })
}

function init(resultFromServer){
  console.log(resultFromServer)
  document.getElementById('description').innerHTML = resultFromServer.weather[0].main;
  document.getElementById('temp').innerHTML = Math.round(resultFromServer.main.temp) + ' degrees F';
}

document.getElementById('searchBtn').addEventListener('click',()=> {
  let searchTerm = document.getElementById('searchInput').value;
  if(searchTerm)
    searchWeather(searchTerm);
})

document.getElemntById('')
