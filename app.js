const btn= document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const p= document.createElement('p');
const h3= document.createElement('h3');
const mes= document.createElement('p');
const div= document.querySelector('#content');
const img = document.createElement('img');
const icon= document.querySelector('#icon');
const temp= document.querySelector('#temp');

const sup= document.createElement('sup');

let a;

btn.addEventListener('click',get);
function get(){
    let city = input.value;
    fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=469df3a38afb39cb526d1497a228c8a6&units=metric`)

    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        a= data;
        temp.innerHTML='';
        icon.innerHTML='';
        ul.innerHTML='';
        p.innerText='';
        h3.innerHTML='';
        mes.innerText='';
        console.log(data);
        var iconCode = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        var img = document.createElement("img");
        img.src = iconUrl;
        icon.append(img);
        temp.innerHTML=`<h3>${data.main.temp}°C</h3>`;
        const feels= document.createElement('li');
        const hum= document.createElement('li');
        const wind= document.createElement('li');
        const des= document.createElement('li');

        feels.innerText=`Feels like : ${data.main.feels_like}°C`;
        hum.innerText=`Humidity : ${data.main.humidity}%`;
        wind.innerText=`Wind : ${Math.floor(data.wind.speed)*3.6} km/h`;
        des.innerText=`Weather : ${data.weather[0].description}`;

        ul.append(feels);
        ul.append(hum);
        ul.append(wind);
        ul.append(des);
    })
    
    .catch((e) => {
        ul.innerHTML='';
        p.innerHTML='';
        h3.innerHTML='';
        mes.innerText='';
        p.innerText='Oops!! Something Went Wrong :(';
        h3.innerText=`Status Code: ${a.cod} `;
        mes.innerText=`${a.message} `;
        div.append(p); 
        div.append(mes);
        div.append(h3);

        
    });
}
