// Example 1
let i = 3;
while (i < 5) {
    i++;
    console.log(i);
}

// Example 2
// const heros = ['Batman', 'Superman', 'Spiderman'];
// let result = '';
// for (let i = 0; i < heros.length; i++) {
//     console.log(i)
//     console.log(heros[i])
//     result += `<div>${heros[i]}</div>`
// }

// document.getElementById('app').innerHTML = result

// Example 3
// const superHeros = [
//     {
//         name: "Batman",
//         age: "30",
//         power: "Имеет кучу денег и крутую тачку",
        
//     },
//     {
//         name: "Superman",
//         age: "29",
//         power: "Умеет летать",
//         obj: {
//             prop: "Test",
//         },
//     },
//     {
//         name: "Spiderman",
//         age: "25",
//         power: "Умеет карабкаться по стенам",
//         obj: {
//             prop: "Test",
//         },
//     },
// ];

// let result = "";

// superHeros.forEach((item, index, array) => {
//     result += `<div class="some-class">${item.name}</div>
//                 <div id="${item.name.toLowerCase()}">${item.age}</div>
//                 <div data-name="${item.name.toLowerCase()}">${item.power}</div>
//                 <div>${item.obj?.prop?.prop}</div>`;
// });

// document.getElementById("app").innerHTML = result;

// const filteredHeros = superHeros.filter(item => item.age > 29);
// console.log(filteredHeros);
// console.log(superHeros);
