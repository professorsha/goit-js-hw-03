// Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:

// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.
function filterArray(numbers, value){
let newArray=[];
const n=numbers.length;
for (let i=0;i<=n;i++){
    if (numbers[i]>value){
        newArray.push(numbers[i]);
    }
}
return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
