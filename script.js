function foo (value){
    return new Promise ((resolve, reject)=>{
        if(5<2)
            setTimeout( ()=> resolve(value * 2), 2000);
        else;
            setTimeout( ()=> reject("rejected"), 2000);

    });
}

foo(5).then((data1)=>{
    console.log(data1)
    return foo(data1);
}).then((data2)=>{
    console.log(data2)
    return foo(data2);
}).then((data3)=>{
    console.log(data3)
    return foo(data3);
}).catch((error)=>{console.log(error)})


 var p1 = new Promise((resolve, reject) => {
     if(true){
        setTimeout(()=>{resolve("Promise 1 is fulfilled")},3000);
     }else{
        setTimeout(()=>{resolve("Promise 1 is rejected")},3000);
     }
 });

 var p2 = new Promise((resolve, reject) => {
    if(true){
       setTimeout(()=>{resolve("Promise 2 is fulfilled")},1000);
    }else{
       setTimeout(()=>{resolve("Promise 2 is rejected")},1000);
    }
});

var p3 = new Promise((resolve, reject) => {
    if(false){
       setTimeout(()=>{resolve("Promise 3 is fulfilled")},5000);
    }else{
       setTimeout(()=>{resolve("Promise 3 is rejected")},5000);
    }
});

Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));



let res1=fetch('https://data.covid19india.org/v4/min/timeseries.min.json');
res1.then((data)=>{
return data.json();
}).then((data)=>{
    console.log(data)
    console.log(data.TN.total)}).catch((error)=>console.log(error));




let res2=fetch('https://api.covid19api.com/total/country/india');
res2.then((data)=>{
    return data.json();
}).then ((data)=> {
    for(let i =0 ; i< data.length; i++){
        console.log(`Day ${i}  
        confirmed:  ${data[i].Confirmed}   Deaths:  ${data[i].Deaths}   Recovered:  ${data[i].Recovered}   Active:  ${data[i].Active}`)
    
    }
    }).catch((error)=> console.log(error));
var rest_countries_promise = await getrestcountries();
var restCountries_array =  await rest_countries_promise.json();
console.log(restCountries_array);


    var text_field = document.createElement('input');
    text_field.setAttribute('id','input');
    text_field.setAttribute('type', 'text');
    text_field.style.textAlign= "center";
    document.body.append(text_field);

    var submit = document.createElement('button');
    submit.setAttribute('id','submit');
    submit.style.display = "block";
    submit.innerHTML = "Submit";
    submit.addEventListener('click',function(){
        foo(document.getElementById('input').value);
    });
    document.body.append(submit);
    

function getrestcountries(){
    return fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
}

function getCovidData(value){
    return fetch("https://api.covid19api.com/total/country/"+value);
}

async function foo(value){
    try{
        var covid_promise = await getCovidData(value);
        var covid_array =  await covid_promise.json();
        for(let i =0 ; i< covid_array.length; i++){
                    console.log(`Day ${i}  Country ${covid_array[i].Country}
                    confirmed:  ${covid_array[i].Confirmed}   Deaths:  ${covid_array[i].Deaths}   Recovered:  ${covid_array[i].Recovered}   Active:  ${covid_array[i].Active}`)
                
                }

       
    }catch(error){
        console.log(error);
    }

    
}


async function getdata(){
    try {
        let res = await fetch ("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
        let result = await res.json();
        console.log(result.length);
        for(let i = 0; i < result.length; i++){
            var name=result[i].name;
            var latlon=result[i].latlng;
            weatherdata(name,...latlon);
        }

    } catch (error) {
        console.log(error);
    }
}
async function weatherdata (name,lat,lang){

    try {
        if(!lat || !lang) throw new Error("invalid coordinates for the country");
        let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=ef8c88634a587a6e3c5df52e6cd9b775&units=imperial`)
        let result = await res.json();
        console.log(`${name}:${result.main.temp}`);
    } catch (error) {
        console.log(error);
    }

}
getdata();



var url = "https://61d28673da87830017e5953f.mockapi.io/user";
//GET- Read
function getdata(){
    fetch (url).then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))

}

//POST - create

function createdata(){
    //adding 1st data
    let data = {
        name: "john doe",
        email: "johndoe@gmail.com" 
    };
    fetch( url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type" : "application/json;charset= UTF-8",
        }
    
    }).then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))

    //adding 2nd
    let data2 = {
        name: "tamil selvan",
        email: "xyz@gmail.com" 
    };
    fetch( url, {
        method: "POST",
        body: JSON.stringify(data2),
        headers: {
            "Content-type" : "application/json;charset= UTF-8",
        }
    
    }).then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))

 }
 
 //UPDATA

 function updatedata(){
    //adding 1st data
    let data = {
        name: "john doe",
        email: "johndoe@gmail.com" 
    };
    fetch( url + "/7", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type" : "application/json;charset= UTF-8",
        }
    
    }).then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))

    
 }

  function deletedata(){

    fetch( url + "/6", {
        method: "DELETE"
    }).then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))

  }

  deletedata();
