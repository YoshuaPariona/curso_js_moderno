const state = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Green Lantern',
    },
    {
        id: 4,
        name: 'Flash',
    },
];

const index = 1;
const newName = 'Aquaman';
/*
const newState = state.map( (hero, i) => {

    if( i === index ) {
        hero.name = newName
    }

    return hero;
})
*/

const newState = state.with(index, {
    ...state.at[index],
    name: newName,
});

state[0].name = 'DeadStroke';

console.log(newState);
console.log( 'El último: ',state.at(0) );