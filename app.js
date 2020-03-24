const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector('.icon img');
const updateUi = (data)=>{
    console.log(data);
//    const cityDets = data.cityDets;
//    const weather = data.weather;

//destruct
   const{cityDets,weather} =data;


   //details on card
   details.innerHTML=`
   <h5 class="my-3">${cityDets.EnglishName}</h5>
   <div class="my-3">${weather.WeatherText}</div>
   <div class="display-4 my-4">
       <span>${weather.Temperature.Imperial.Value}</span>
       <span>&deg;F</span>
   </div>
   `;

//weather image
const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute("src",iconsrc);
 


let  timesrc = weather.IsDayTime ?"img/day.svg":"img/night.svg";
time.setAttribute("src",timesrc);



        if(card.classList.contains("d-none")){
            card.classList.remove('d-none');
        }; 
};



const updateCity = async (city) =>{

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // console.log();
    return{cityDets,weather};
};
cityForm.addEventListener("submit",e=>{
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
  .then(data => updateUi(data))
  .catch(err => console.log(err)); 
})

const result = true ? "value1":"value2";
console.log(result);