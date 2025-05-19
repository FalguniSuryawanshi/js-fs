const marvel_heros = ["Thor","Ironman","Spiderman"] 
const dc_heros = ["Batman","Flash","Superman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_arry = [1, 2, 3, [4, 5, 6], 8, [6, 7]]
const real_another_array = another_arry.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("falguni"));
console.log(Array.from("falguni"));

console.log(Array.from({name:"falguni"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));







