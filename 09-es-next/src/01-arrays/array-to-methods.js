const heroes = ['Batman','Superman','Green Lantern','Flash'];

const reversedHeroes = heroes.toReversed();
const sortedHeroes = heroes.toSorted();
const deletedHero = heroes.toSpliced(0, 2, 'Aquaman');

console.table(heroes);
console.warn('toSorted')
console.table(sortedHeroes);
console.warn('toReversed')
console.table(reversedHeroes);
console.warn('toSpliced')
console.table({deletedHero});