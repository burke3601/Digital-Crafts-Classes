const petNames = ['fluffy', 'bubba', 'scooter', 'moose', 'rusty']




function pets(p){
    //const p = petNames[0];
    //console.log(p);
    return p;
}

//pets(petNames[0]);

const newArray = petNames.map(pets);
//console.log(newArray);

function transformToListItem(p) {
    return `<li>${p}<li>`;
}

const listItemArray = petNames.map(transformToListItem)


console.log(listItemArray.join(' '));


const peopleObjectArray = [
    {
        name: 'alice',
        id: 12345
    },
    {
        name: 'bob',
        id: 12346
    },
    {
        name: 'charlie',
        id: 12347
    }
]

function greetObj(o) {
    //console.log(o.id);
    return `<li>
                ${o.name}
            </li>`;
}
//works for one item
//console.log(greetObj(peopleObjectArray[0]));

const newGreetArray = peopleObjectArray.map(greetObj).join('');
//console.log(newGreetArray)