//1.1 В цикле вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком.

const arr = [2,5,9,7,8,10,15]
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
for(let item of arr){
    console.log(item)
}


//1.2 Посчитать и вывести в консоль сумму элементов в массиве из чисел.

const arr = [2,5,9,7,8,10,15]
sum=0
for(let item of arr){
    sum += item
}
console.log(sum)


//1.3 Посчитать и вывести в консоль сумму четных элементов в массиве из чисел.

const arr = [2,5,9,7,8,10,15]
sum=0
for(let item of arr){
    if(item%2 == 0){
        sum += item
    }
}    
console.log(sum)


// 2. Определить массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.

// Подсказка. Сразу нужно объявить пустой массив-хранилище (например, let newArr = []). Потом пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr (сделать это можно при помощи newArr.push(item). 

const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
const newArr = []
for (let item of arr){
    if (item > 0){
        newArr.push(item)
    }
}
console.log(newArr)


// 3. Определить массив, например let arr = [5, 4, 3, 8, 0]; и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами arr, но в новом должны содержаться элементы больше и равные (>=) значения переменной limit.

const arr = [5, 4, 3, 8, 0]
let limit = 5
const newArr = []
for (let i = 0; i < arr.length; i++){
    if (arr[i] >= limit){
        newArr.push(arr[i])
    }
}
console.log(newArr)

// 4. Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

const arr = [
    {name: 'Ivan', age: 25},
    {name: 'Vasia', age: 28},
    {name: 'Katia', age: 7},
    {name: 'Kolya', age: 70},
    {name: 'Sasha', age: 17},
    {name: 'Polina', age: 37},
    {name: 'Dima', age: 37},
    {name: 'Sofia', age: 47}
]

for (let i = 0; i < arr.length; i++){
    for (let item of arr){
        if(arr[i]['age'] > 10){
            console.log(arr[i]['name'])
        }
    }
}


// 5. Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова)

const arr = ['masha', 'kolya', 'vadim', 'misha', 'vitaliy']
const newArr = []
for (let item of arr){
    newArr.push({word: item, length: item.length})          
}
console.log(newArr)

// 5.1 Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"


for (let item of newArr){
    console.log(item['word'] + '-' + item['length'])
}

