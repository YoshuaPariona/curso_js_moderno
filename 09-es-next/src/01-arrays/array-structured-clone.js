
const superHeroes = [
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

const superHeroesCopy = structuredClone( superHeroes );
superHeroesCopy[0].name = 'Aquaman';

console.table( superHeroes );
console.table( superHeroesCopy );