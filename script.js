//Method  search in JS "forEach"
let names = ["Nika", "Emil", "Taya"]
names.forEach((name) => {
    console.log(name + " my friend")
})
// ----------------------------------------------------------------------------------------------
//Loop in JS "for"
const items = ["item1","item2","item3"];
const copy = []

for (let i = 0; i < items.length; i++) {
    copy.push(items[i]) 
    console.log(copy)
}

// ----------------------------------------------------------------------------------------------
// Method  in JS "filter"
let array = [1, 766, 54, 988, 2, 55, 275, 217]
let newArray = array.filter((number) => {
    return number % 2 === 0
});
console.log(newArray)

// ----------------------------------------------------------------------------------------------
//Method in JS "map"
let num = [1, 4, 62, 54, 10, 97, 34];
let result = num.map((elem) => {
    return elem * 2;
})
console.log(result)


//-------------------------------------------------------------------- Big O notation

// ----------------------------------------------------------------------------------------------
// O(1) - Константная сложность:
function getFirstElement(arr) {
    return arr[0];
}

const myArray = [1, 2, 3, 4, 5];
console.log(getFirstElement(myArray)); // Всегда вернет первый элемент массива

// ----------------------------------------------------------------------------------------------
// O(log n) - Логарифмическая сложность
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 7)); // Ищем 7 и возвращаем его индекс


// ----------------------------------------------------------------------------------------------
// O(n) - Линейная сложность:
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(myArray, 7)); // Ищем 7 и возвращаем его индекс

// ----------------------------------------------------------------------------------------------
// O(n log n) - Сложность n*log(n):
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(mergeSort(unsortedArray)); // Отсортированный массив

// ----------------------------------------------------------------------------------------------
// O(n^2) - Квадратичная сложность:
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Обмен местами
            }
        }
    }
    return arr;
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(bubbleSort(unsortedArray)); // Отсортированный массив

// ----------------------------------------------------------------------------------------------
// O(2^n) - Экспоненциальная сложность:
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // Возвращает 55, но уже на больших числах выполняется очень медленно
