// Запросите у пользователя число
let n = parseInt(prompt("Введите число (N):"));

// Инициализируем пустой массив для хранения факторов
let factors = [];

// Итерация от 1 до N (включительно)
for (let i = 1; i <= n; i++) {
// Если число является фактором N, добавьте его в массив
  if (n % i === 0) {
    factors.push(i);
  }
}

// Объедините и отобразите факторы
console.log(factors.join(" "));