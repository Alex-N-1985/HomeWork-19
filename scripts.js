// Задание №1

// let pet1 = {
//     name : "Пиксель",
//     type : "Кот",
//     sound: "Мяу"
// },
//     pet2 = {
//     name: "Бакс",
//     type: "Пес",
//     sound: "Гав"
// };

//  pet1.say = function() {
//     let output = this.type + " " + this.name +  " говорит " + this.sound;
//     return output;
//  };

//  pet2.say = function() {
//     let output = this.type + " " + this.name +  " говорит " + this.sound;
//     return output;
//  };

// console.log(pet1.say());
// console.log(pet2.say());

// Задание 2 

// let productsType = {
//     "potato" : "овощи",
//     "carrot": "овощи",
//     "banana": "фрукты",
//     "orange": "фрукты",
//     "apple": "фрукты",
//     "strawberry": "ягоды",
//     "tomato": "овощи",
//     "melon": "фрукты",
//     "lemon": "фрукты",
//     "сabbage": "овощи",
//     "beet": "овощи",
//     "raspberry": "ягоды"
// }

// let productBag = {}

// for(let item in productsType){
//     if (productBag[productsType[item]]){
//         productBag[productsType[item]] += 1;
//     } else {
//         productBag[productsType[item]] = 1;
//     }
// }

// for (let key in productBag) {
//     console.log(key + " : " + productBag[key]);
// }

// Задание 3

let cars = {
    moskvich: {
        color: "green",
        origin: "Российская Федерация",
        year: 1995,
    },
    jiguli: {
        color: "red",
        origin: "Российская Федерация",
        year: 1995,
    },
    nissan: {
        color: "black",
        origin: "Япония",
        year: 2008,
    },
    hundai: {
        color: "silver",
        origin: "Южная Корея",
        year: 2015,
    },
    bmw: {
        color: "blue",
        origin: "Германия",
        year: 2010,
    },
    ford: {
        color: "black",
        origin: "США",
        year: 1998,
    },
    volkswagen: {
        color: "silver",
        origin: "Германия",
        year: 2003,
    },
    toyota: {
        color: "lightgreen",
        origin: "Япония",
        year: 2018,
    },
    volga: {
        color: "silver",
        origin: "Российская Федерация",
        year: 2000,
    },
    renault: {
        color: "blue",
        origin: "Франция",
        year: 2015,
    }
}

let sortedCars = [];

for (let item in cars){
    sortedCars.push([item, cars[item]]);
}

sortedCars.sort(function(a, b){
    return a[1].year - b[1].year;
});

for (let i = 0; i < sortedCars.length; i++){
    console.log(sortedCars[i]);
}

console.log("Старые машины:");
for (let i = 0; i < 3; i++){
    console.log(sortedCars[i]);
}
console.log("Новые машины:");
for (let i = sortedCars.length - 3; i < sortedCars.length; i++){
    console.log(sortedCars[i]);
}