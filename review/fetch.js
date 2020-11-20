fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
.then(response=>response.json())
.then(data=>{
    console.log(data)
    //do whatever with data
})

//check recording from 11/20 ro rewatch


fetch('http://URL-of-API') //fetch the API
.then(res=>res.json())
.then(data=>{
    //do whatever with data
})