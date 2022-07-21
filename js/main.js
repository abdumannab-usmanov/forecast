// let elForm = document.querySelector(".js-form")
// let elInput = document.querySelector(".js-input")
// let elWeather = document.querySelector(".js-weather")
// let elTemplate = document.querySelector(".js-template").content
// const API_KEY = "2da7db913043c152b46558e6b360b46f"


// let  elInputVal = elInput.value.trim()




// function render(arr, node){
//     [arr].forEach(el => {
//         node.innerHTML = ""
        
//         console.log(el);
        
//         let newTemplate = elTemplate.cloneNode(true)

//         newTemplate.querySelector(".area").textContent = el.name
//         newTemplate.querySelector(".country-name").textContent = el.sys.country 
//         newTemplate.querySelector(".temptature").textContent = el.main.temp_max
//         newTemplate.querySelector(".weather-like").textContent = el.weather[0].description
//         // newTemplate.querySelector(".js-img").src = `http://openweathermap.org/img/w/${icon}.png` 
        
    
        

//         elWeather.appendChild(newTemplate)
        
//     });
// }




// elForm.addEventListener("submit", function(evt){
//     evt.preventDefault()
    
//     elInputVal = elInput.value.trim()
    
    
//     getWeather()
    
//     elInput.value = ""
 
// })


// async function getWeather(){
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elInputVal}&appid=${API_KEY}&units=metric`)
//     const data = await res.json()
//     console.log(data);
//     render(data, elWeather)
// }

// getWeather()






let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elWeather = document.querySelector(".js-weather");
let elTemplate = document.querySelector(".js-template").content;
const API_KEY = "2da7db913043c152b46558e6b360b46f";

let elInputVal;

function render(obj, node) {
  node.innerHTML = "";

  const icon = obj.weather[0].icon;

  let newTemplate = elTemplate.cloneNode(true);

  newTemplate.querySelector(".area").textContent = obj.name;
  newTemplate.querySelector(".country-name").textContent = obj.sys.country;
  newTemplate.querySelector(".img").src = `http://openweathermap.org/img/w/${icon}.png`;
  newTemplate.querySelector(".temptature").textContent = Math.round(obj.main.temp_max) ;
  newTemplate.querySelector(".weather-like").textContent =
    obj.weather[0].description;

  elWeather.appendChild(newTemplate);
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elInputVal = elInput.value;

  getWeather();

  elInput.value = "";
});

async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${elInputVal}&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();
  console.log(data);
  render(data, elWeather);
}