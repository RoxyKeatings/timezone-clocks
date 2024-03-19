function updateTime() {
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTime = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let washingtonElement = document.querySelector("#washington");
  let washingtonDateElement = washingtonElement.querySelector(".date");
  let washingtonTimeElement = washingtonElement.querySelector(".time");
  let washingtonTime = moment().tz("America/Vancouver");

  washingtonDateElement.innerHTML = washingtonTime.format("MMMM Do YYYY");
  washingtonTimeElement.innerHTML = washingtonTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
                <div>
                    <h3>${cityName}</h3>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss [<small>] A [</small>]"
                )}</div>
            </div>
  
  
  
  `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
