
const socket = io();


const bttnCelcius = document.getElementById('celcius');
const bttnFahrenheit = document.getElementById('fahrenheit');
const bttnKelvin = document.getElementById('kelvin');


bttnCelcius.addEventListener("click", ()=>{

    socket.on('temp', function(data){

        console.log(data)
        let print = document.getElementById('data');
        print.innerHTML = `${data.celsius}°C`
    
    })

})


bttnFahrenheit.addEventListener("click", ()=>{


    socket.on('temp', function(data){

        console.log(data)
        let print = document.getElementById('data');
        print.innerHTML = `${data.fahrenheit}°F`
    
    })


})


bttnKelvin.addEventListener("click",()=>{

    socket.on('temp', function(data){

        console.log(data)
        let print = document.getElementById('data');
        print.innerHTML = `${data.kelvin}°K`
    
    })



})



/*

socket.on('fecha', function(data){

    let print = document.getElementById('fecha');
    print.innerHTML = data;
})

*/