const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
// const temp_real_val =document.getElementById("temp_real_val");
// const data_hide = document.querySelector('.middle_layer');


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal===""){
            city_name.innerHTML="Please write city name";
            data_hide.classList.add('data_hide');
    }else{
       try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9e0a8859c69cbc3fc2b53345ccad4903`;

        const response = await fetch(url);
        // coverting response into object
        const data = await response.json();
        
        const arrData = [data];
        //console.log(arrData);
        temp.innerText = arrData[0].main.temp;
        //console.log( arrData[0].main.temp);
        //temp_status.innerText = arrData[0].weather[0].main;
        //console.log(arrData[0].weather[0].main)


        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;


        // clouds
        const tempMood = arrData[0].weather[0].main;
        
            if(tempMood =="Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood =="Clouds"){
            temp_status.innerHTML = "<i class='fa fa-cloud' aria-hidden='true'></i>";
            }
            else if(tempMood =="Rain"){
                temp_status.innerHTML = "<i class='fa fa-cloud-rain' aria-hidden='true'></i>";
            }
           else{
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #f1f2f6;'></i>";
           }
           data_hide.classList.remove('data_hide');
    }
    catch{
        city_name.innerText="Please write city name";
        data_hide.classList.add('data_hide');
    }
}
    
} 

submitBtn.addEventListener("click",getInfo);