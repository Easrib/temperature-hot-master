const API_key = `d2017ec640951591b09d416dd5596acf`;

const searchTemp = () => {
    const city = document.getElementById('searchText').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}

const setInnertext = (id, name) => {
    document.getElementById(id).innerText = name;
}
const displayTemparature = temperature => {
    setInnertext("city", temperature.name)
    setInnertext("temp", temperature.main.temp)
    setInnertext("weather-type", temperature.weather[0].description)

    const imageTag = document.getElementById('image');
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    imageTag.setAttribute('src', url)
}