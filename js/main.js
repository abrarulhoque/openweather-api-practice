// API Call
const apiKey = `36f548e0e4b355008cad2b657a3a822a`;

const loadData = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data, city))
}

const displayTemp = (data, city) => {
    const tempHTML = document.getElementById('temperature');
    tempHTML.innerText = data.main.temp;

    const cityHTML = document.getElementById('city');
    cityHTML.innerText = data.name;

    const getCondition = document.getElementById('condition');
    getCondition.innerText = data.weather[0].main;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const getSearchField = document.getElementById('search-field').value;
    loadData(getSearchField);
})

