// const refs = {
//     searchForm: document.getElementById("searchForm"),
//     list: document.getElementById("list"),
//   };

// refs.searchForm.addEventListener("submit", onSearchWeather);

// function onSearchWeather(e){
//     e.preventDefault();

//     const {city, days} = refs.searchForm.elements;
    
//     serviceWeather(city.value, days.value).then((data) => {
//     refs.list.innerHTML = createMarkup(data.forecast.forecastday)
//     }).catch(er => console.log(er))
// }

// function serviceWeather(city, days){
//     const URL = "http://api.weatherapi.com/v1/forecast.json";
//     const KEY = '34313f3de27147cf860114704230908';
//     const params = new URLSearchParams( {
//         key: KEY,
//         q: city,
//         days,
//     });

//     return fetch(`${URL}?${params}`).then(res => {
//         if(!res.ok){
//             throw new Error(res.statusText);
//         }
//         return res.json();
//     })
// };

// function createMarkup(arr){
//     return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { text, icon },
//         },
//       }) => `<li class="weather-card">
//       <img src="${icon}" alt="${text}" class="weather-icon">
//       <h2 class="date">${date}</h2>
//       <h3 class="weather-text">${text}</h3>
//       <h3 class="temperature">${avgtemp_c} °C</h3>
//   </li>`
//     ).join('')}


// ________________________________________________________________
// ________________________________________________________________
// _______________________PAGINATION_______________________________
// ________________________________________________________________
// ________________________________________________________________


const options = {
    headers: {
        Authorization: '4330ebfabc654a6992c2aa792f3173a3'
    }
};
const url = "https://newsapi.org/v2/everything?q=cat&landuage=en&pageSize=10&page=1";

fetch(url, options).then(r => r.json).then(console.log)
