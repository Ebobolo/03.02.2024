// Инициализируем пустой массив для хранения случайных чисел
let numbers = [];

// Генерируем 10 случайных чисел в диапазоне 1-20, исключая кратные 4
while (numbers.length < 10) {
  let num = Math.floor(Math.random() * 20) + 1;
  if (num % 4 !== 0) {
    numbers.push(num);
  }
}

// Отображение сгенерированных чисел
console.log(numbers.join(" "));