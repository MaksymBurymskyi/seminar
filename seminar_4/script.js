// 1. Є список покупок. Напишіть ф-ію, яка буде додавати елементи у список після вводу у input.
// let ul = document.querySelector("#list");
// let button = document.querySelector("#button");
// let input = document.querySelector("#input");

// button.addEventListener('click', addElement);

// function addElement(element) {
//     if (input.value !== '') {
//         let li = document.createElement('li');
//         li.innerHTML = input.value;
//         ul.appendChild(li);
//         input.value = '';
//     }

// };

// 2. Ускладніть список покупок. Додайте 3 стани (куплено, не куплено, видалено). Створіть для цього select

// 3. Створіть інпут для пошуку погоди за містом. Виведіть на екран погоду на даний момент. Приклад запиту:
// https://api.openweathermap.org/data/2.5/forecast?appid={api_key}&lang=ua&units=metric&q=Маріуполь
// Для того щоб відправити запит, зареєструйтеся на платформі openweathermap.org та створіть собі ключ,
// або скористайтеся цим: $api_key = 35b4e8effcc623676e7574df04d98811;

let forecastSearchInput = document.querySelector("#forecast-search");

let searchBtn = document.querySelector("#search-btn");
const root = document.querySelector("body");
searchBtn.addEventListener("click", getForecast);
const weatherInfoContainer = document.createElement("div");
const weatherInfoContainerCurr = document.createElement("div");

async function getForecast() {
  const url = "https://api.openweathermap.org/data/2.5/forecast";
  const apiKey = "35b4e8effcc623676e7574df04d98811";

  if (forecastSearchInput.value !== "") {
    let city = forecastSearchInput.value;

    try {
      let request = await fetch(
        `${url}?appid=${apiKey}&lang=ua&units=metric&q=${city}`
      );

      if (request.ok) {
        const data = await request.json();
        console.log(data);
        const temp = Math.round(data.list[0]["main"]["temp"]);
        console.log(temp);
        const weather = data.list[0]["weather"][0]["main"];
        console.log(weather);

        weatherInfoContainerCurr.innerHTML = "";

        weatherInfoContainer.textContent = `City: ${city}. Temperature ${temp} C. Weather ${weather}`;
        root.append(weatherInfoContainer);

        for (let index = 1; index <= 4; index++) {
          const element = data.list[index];
          const date = new Date(element.dt * 1000);
          console.log(date);
          //   console.log(date.getHours());
          //   console.log(date.toLocaleTimeString("en-US"));
          const tempCurr = Math.round(data.list[index]["main"]["temp"]);
          const weatherCurr = data.list[index]["weather"][0]["main"];
          const humanTime = date.toLocaleTimeString("uk-UA", {
            hour: "numeric",
            minute: "numeric",
          });

          weatherInfoContainerCurr.innerHTML += `Time: ${humanTime} Temperature ${tempCurr} C. Weather ${weatherCurr} <br>`;

          root.append(weatherInfoContainerCurr);
        }
      } else {
        throw new Error(request.status);
      }
    } catch (error) {
      if (error.message == "404") {
        console.log(error);

        weatherInfoContainer.textContent = `Місто не знайдене`;
        root.append(weatherInfoContainer);
      }
    }
  }
}
