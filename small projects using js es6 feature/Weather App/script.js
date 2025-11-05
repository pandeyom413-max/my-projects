const getWeather = async () => {
  const city = document.getElementById("city").value;
  const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
  const data = await res.json();
  document.getElementById("weather").innerHTML = `
    🌍 ${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}
  `;
};

document.getElementById("get-weather").addEventListener("click", getWeather);
