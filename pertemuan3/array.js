// testing 
// const number = [-1, 1, 2, 3];

// every & some
// jadi every itu kaya and harus true semua
// kalo some salah satu true
// const availableNumber = number.every(function(value){
//     return value >= 0
// })

// const availableNumber = number.every(value => value >= 0)
// console.log(availableNumber)

// some
// const number = [-1, 1, 2, 3];

// const atLeastOneNumber = number.some(function(value){
//     return value >= 0;
// })

// console.log(atLeastOneNumber)

// filtering array
// const number = [1, 2, 3, 4, 5];
// filter()
// const filtered = number.filter(function(value){
//     return value >= 3;
// })

// const filtered = number.filter(value => value > 2)
// const filtered = number.filter(n => n > 2)
// console.log(filtered)

// mapping array
// map
// const number = [1, 2, 3, 4, 5];
// const items = number.map(function(value){
//     return '<li>' + value + '</li>';
// })
// const html = items.join('');
// const html = '<ul>' + items.join() + '</ul>';
// const items = number.map(function(value){
//     const obj = {value: value};
//     return obj;
// })
// const items = number.map(n => ({value: n}))
// console.log(items);
// const number = [1, 2, 3, 4, 5];
// const items = number
//     .filter(n => n > 2)
//     .map(n => ({value: n}))
//     .filter(obj => obj.value >= 4)
// console.log(items)

// reducing array
// const number = [-1, 1, 2, 3]
// let sum = 0;
// for(let n of number){
//     sum +=n
// }
// const sum = number.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })
// cara reducing array
// a = 0, c = -1 => a = -1
// a = -1, c = 1 => a = 0
// console.log(sum)
