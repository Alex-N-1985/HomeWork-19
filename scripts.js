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

let productsType = {
    "potato" : "овощи",
    "carrot": "овощи",
    "banana": "фрукты",
    "orange": "фрукты",
    "apple": "фрукты",
    "strawberry": "ягоды",
    "tomato": "овощи",
    "melon": "фрукты",
    "lemon": "фрукты",
    "сabbage": "овощи",
    "beet": "овощи",
    "raspberry": "ягоды"
}

let productBag = {}

for(let item in productsType){
    if (productBag[productsType[item]]){
        productBag[productsType[item]] += 1;
    } else {
        productBag[productsType[item]] = 1;
    }
}

for (let key in productBag) {
    console.log(key + " : " + productBag[key]);
}