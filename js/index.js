
var arr;
var api;



function setValues (){
    document.getElementById("date1").innerHTML = arr.forecast.forecastday[0].date;
    document.getElementById("date2").innerHTML = arr.forecast.forecastday[1].date;
    document.getElementById("date3").innerHTML = arr.forecast.forecastday[2].date;
    document.getElementById("location").innerHTML = arr.location.name;
    document.getElementById("currtem").innerHTML = ` ${arr.current.temp_c}<sup>o</sup>C `;
    document.getElementById("txtcon").innerHTML = arr.current.condition.text;
    document.getElementById("txtcon").innerHTML = arr.current.condition.text;
    document.getElementById("iconcond").setAttribute("src",`https:${arr.current.condition.icon} `) ;


    document.getElementById("max1").innerHTML = ` ${arr.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup> ` 
    document.getElementById("min1").innerHTML = ` ${arr.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>  ` 
    document.getElementById("txt1").innerHTML = arr.forecast.forecastday[1].day.condition.text
    document.getElementById("icon1").setAttribute("src",`https:${arr.forecast.forecastday[1].day.condition.icon} `) ; 
    document.getElementById("max2").innerHTML = ` ${arr.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup> ` 
    document.getElementById("min2").innerHTML = ` ${arr.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>  ` 
    document.getElementById("txt2").innerHTML = arr.forecast.forecastday[2].day.condition.text
    document.getElementById("icon2").setAttribute("src",`https:${arr.forecast.forecastday[2].day.condition.icon} `) ; 
}



async function get() {
    var x = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8a17e5b641a04ab2877104830231102&q=cairo&days=3`)
    var y = await x.json();
    return y
}



async function doo(){
    arr=await get();
    setValues()
}



doo()



document.getElementById("input").addEventListener("input",async function(){
        api = `https://api.weatherapi.com/v1/forecast.json?key=8a17e5b641a04ab2877104830231102&q=${document.getElementById("input").value}&days=3`
        var x = await fetch(api)
        var y = await x.json();
        arr=await y;
        setValues()
})

