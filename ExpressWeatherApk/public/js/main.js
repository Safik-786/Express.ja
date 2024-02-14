const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('input-cityName')
const cityNameArea = document.getElementById('city-name')
const temprature = document.getElementById('temp-value')

const getInfo= async (event) =>{
    event.preventDefault();
    let searchValue = cityName.value;
    if(searchValue===""){
        cityNameArea.innerText=`Please write the city name before search`
        cityNameArea.style.color="red";
    }
    else{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=e01994eecef0ff993923f5969862eab3`
            const response= await fetch(url)
            const data = await response.json()
            // console.log(data.main)
            // console.log(data.main.temp)
            console.log(data.weather[0].main)
            const temp = data.main.temp - 273 
            console.log(temp.toPrecision(3))
            temprature.innerHTML= temp.toPrecision(3)

            cityNameArea.innerText=searchValue + "  , In"

            
        } catch (error) {
            cityNameArea.innerText=`Please write the valid city name `
        }
    }

    // alert('hello world')
}
submitBtn.addEventListener('click', getInfo)