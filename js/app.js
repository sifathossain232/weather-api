// don't show API_KEY on your js file
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
const displayTemperature = data =>{
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    const condition = document.getElementById('condition');
    condition.innerText = data.weather[0].main;
    // setInnerTextById = ('temperature', data.main.temp);
    // console.log(setInnerTextById);
    // setInnerTextById = ('condition', data.weather[0].main);
    // console.log(data.weather[0].main);
}
// let setInnerTextById = (id, text) =>{
//     const temperature = document.getElementById(id);
//     temperature.innerText = text;
// }
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-filed');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})
loadTemperature('Dhaka');