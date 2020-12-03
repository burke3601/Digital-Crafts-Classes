const places = require('./places.json');

//console.log(places.Georgia.Atlanta["East Lake"]["Chris' House"]["Living Room"]);


// function to print out array of city names in georgia



// const cities =(state) => Object.keys(state);

// console.log(cities(places.Georgia))


function getCities(cat) {
    return Object.keys(places[cat]);
}

//const getCities = state => console.log(Object.keys(places[state]))


// console.log(getCities("Texas"));
// console.log(getCities("Alaska"));
// console.log(getCities("Georgia"));


function getNeighborhood(n, country){
    // East Lake, Atlanta
    // find neighborhood which is level 3 in data
    const states = Object.keys(country);
    // console.log(states)
    for(let s of states) {
        // console.log(Object.keys(country[s]))
        const cities = Object.keys(country[s]);

        for (let c of cities) {
            //console.log(Object.keys(country[s][c]))
            const nhs = Object.keys(country[s][c]);

            for (let nh of nhs ){
                if (n === nh){
                    console.log('YAY')
                    console.log(`${nh}, ${c}`)
                }
                
            }

        }

    }
}

getNeighborhood("East Lake", places)