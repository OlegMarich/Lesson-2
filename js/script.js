{
	let a = 5
	let b = 3

	let S1 = a + 12 + b

	console.log('Задача №0 1):');
	console.log(`Sum = ${S1}`);
}

{
	let a = 8
	let b = 4

	let S2 = Math.sqrt((a + b) / (2 * a))

	console.log('Задача №0 2):');
	console.log(`Sum = ${S2}`);
}

{
	let a = 10
	let b = 8
	let c = 2

	let S3 = 3 * Math.sqrt((a + b) * c)

	console.log('Задача №0 3):');
	console.log(`Sum = ${S3}`);
}

{
	let a = 50
	let b = 2

	let S4 = Math.sin(a / -b)

	console.log('Задача №0 4):');
	console.log(`Sum = ${S4}`);
}

{
	let a = 10
	let b = 5

	// Обчислення суми
	let sum = a + b

	// Обчислення добутку
	let product = a * b;

	// Обчислення частки
	let quotient = a / b;

	console.log('Задача №1:');
	// Виведення результатів у формі таблиці
	console.log("Операція\t| Результат");
	console.log("-----------------------");
	console.log("Сума\t| " + a + " + " + b + " = " + sum);
	console.log("Добуток\t| " + a + " * " + b + " = " + product);
	console.log("Частка\t| " + a + " / " + b + " = " + quotient);
}

{
	// Дата народження (1 січня)
	let birthYear = 1991

	// Поточний рік
	let currentYear = new Date().getFullYear()

	// Обчислення кількості років
	let age = currentYear - birthYear;

	console.log('Задача №2:');
	console.log("Кількість років:", age);
}

{
	let a = 10
	let b = 5

	// Обчислення загальної вартості
	let totalPrice = a * b

	// Обчислення ПДВ

	let vat = 0.05 * totalPrice

	console.log('Задача №3:');
	console.log('Загальна вартість товару:', totalPrice);
	console.log('ПДВ (5%):', vat);
}

{
	// Довжина в сантиметрах
	let a = 150;
	// Переведення в метри
	let b = a / 100

	// Переведення в кілометри
	let c = a / 100000

	console.log('Задача №4:');
	console.log("Довжина в метрах:", b);
	console.log("Довжина в кілометрах:", c);
}

{
	// Кількість секунд, що пройшла від початку доби 18:24
	let totalSeconds = 18 * 3600 + 24 * 60

	// Обчислення годин
	let hours = Math.floor(totalSeconds / 3600)

	// Обчислення хвилин
	let remainingSeconds = totalSeconds % 3600
	let minutes = Math.floor(remainingSeconds / 60)

	console.log('Задача №5:');
	console.log('Кількість годин:', hours);
	console.log('Кількість хвилин:', minutes);
}

// Отримання вартості товару та кількості одиниць з клавіатури
let price1 = parseFloat(prompt("Введіть вартість першого товару:"))
let quantity1 = parseInt(prompt("Введіть кількість першого товару:"))
let price2 = parseFloat(prompt("Введіть вартість другого товару:"))
let quantity2 = parseInt(prompt("Введіть кількість другого товару:"))
let price3 = parseFloat(prompt("Введіть вартість третього товару:"))
let quantity3 = parseInt(prompt("Введіть кількість третього товару:"))

// Обчислення вартості кожного товару та загальної вартості
let total1 = price1 * quantity1
let total2 = price2 * quantity2
let total3 = price3 * quantity3
let grandTotal = total1 + total2 + total3

// Генерування чеку у вигляді HTML-розмітки
let receipt = "<h2>Чек:</h2>"
receipt += "<table border='1'>"
receipt += "<tr><th>Товар</th><th>Ціна за одиницю</th><th>Кількість</th><th>Загальна вартість</th></tr>"
receipt += "<tr><td>Товар 1</td><td>" + price1 + "</td><td>" + quantity1 + "</td><td>" + total1 + "</td></tr>"
receipt += "<tr><td>Товар 2</td><td>" + price2 + "</td><td>" + quantity2 + "</td><td>" + total2 + "</td></tr>"
receipt += "<tr><td>Товар 3</td><td>" + price3 + "</td><td>" + quantity3 + "</td><td>" + total3 + "</td></tr>"
receipt += "<tr><th colspan='3'>Загальна вартість</th><td>" + grandTotal + "</td></tr>"
receipt += "</table>"

// Виведення чеку у вигляді HTML
document.write(receipt);

{
	let randomMonth = Math.floor(Math.random() * 12) + 1
	let randomDay = Math.floor(Math.random() * 7);
	let sum = randomMonth + randomDay;

	console.log('Задача №7:');
	console.log("Сума випадкового номера місяця та дня:", sum);
}
