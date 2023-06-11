// Вивести на сторінку в один рядок через кому числа від 10 до 20
let num = '';

for (let i=10; i <= 20; i++) {
    num += i + ', ';
}
console.log (num.slice(0,-2));

//Вивести квадрати чисел від 10 до 20

for (let i = 10; i <= 20; i++) {
    console.log (i ** 2);
}

//Вивести таблицю множення на 7

for (let i = 1; i <= 10; i++) {
    console.log (`7 x ${i} = ${7*i}`);
}

// Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log (sum);

//Знайти добуток усіх цілих чисел від 15 до 35
let product = 1;
for (let i = 15; i <= 15; i++) {
    product *= i; 
}
console.log (product);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let summa = 0;
for (let i = 1; i <= 500; i++) {
    summa += i;
}
let averageArithm = summa / 500;
console.log ('', averageArithm);

//Вивести суму лише парних чисел у діапазоні від 30 до 80
let sumEven = 0;
for (let i =30; i <= 80; i++) {
    if (i % 2 == 0) {
        sumEven += i;
    }
}
console.log (''+ sumEven);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log (i);
    }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let  natNum = 56;
let sumNatNum = 0;
 for (let i = 1; i <= natNum; i++) {
    if (natNum % i === 0) {
        console.log (i);
    }
 }

 //Визначити кількість його парних дільників
 let divisors = 0;

 for (let i = 1; i <= natNum; i++) {
    if (natNum % i == 0 && i %2 == 0) {
        divisors ++;
    }
 }
 console.log (''+ divisors);

 //Знайти суму його парних дільників
 let s = 0;
  for (let i = 1; i <= natNum; i++) {
    if (natNum % i == 0 && i % 2 == 0) {
        s += i;
    }
  }
  console.log (''+ s);

  //Надрукувати повну таблицю множення від 1 до 10
  for (let i = 1; i <= 10; i++) {
    for (let b = 1; b <= 10; b++) {
        console.log (i + 'x' + b + '=' + i * b);
    }
  }