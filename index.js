// console.log("Hello");

// let students = 100;
// students += 50;
// console.log(students);

// console.log(Math.floor(27.3));
// console.log(Math.floor(27.9));

// console.log(Math.ceil(27.3));
// console.log(Math.ceil(27.9));

// console.log(Math.round(27.3));
// console.log(Math.round(27.9));

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message);

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(",", "."));
// height = Number(height);

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi);

// const value = prompt("Яка офіційна назва Java Script");
// if (value === 'ECMAScript') {
//     alert('Правильно')
// } else { alert('Не знаєте? ECMAScript') };

// const hours = 14;
// const minutes = 0;
// let timestring;
// if (minutes) {
//     timestring =`${hours} г ${minutes} хв`
// } else { timestring = `${hours} г` };
// console.log(timestring);
// const userInput = Number(prompt("введіть число"));

// if (!userInput) {
//   console.log("Це нуль");
// } else if (userInput>0) {
//   console.log("Це позитивне число");
// } else {
//   console.log("це негативне число");
// }
// const a = 120;
// const b = 180;
// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }
// let link = 'https://somesite.com/about';

// console.log(link.includes("my-site")&&!link.endsWith("/")?link+="/":link);
// const hours = 25;
// if (hours < 17) {
//     console.log('Pending')
// } else if(hours >= 17 && hours <=24){
//     console.log("Expires")
// }else{console.log("Overdue")}
// const daysUntilDeadline = 3;
// if (!daysUntilDeadline) {
//     console.log("Сьогодні")
// } else if (daysUntilDeadline === 1) {
//     console.log("Завтра")
// } else if (daysUntilDeadline === 2) {
//     console.log("Післязавтра")
// } else {
//     console.log("Дата у майбутьому")
// }
// switch (daysUntilDeadline) {
//     case 0: console.log("Сьогодні")
//         break
//     case 1: console.log("Завтра")
//         break;
//     case 2: console.log("Післязавтра")
//         break;
//     default: console.log("Дата у майбутньому")
// }

// const login = prompt("Введіть логін");

// if (!login) {
//     console.log("Скасовано")
// } else if (login === "Адмін") {
//     const password = prompt("Введіть пароль");
//     if (password === "Я Адмін") {
//         console.log("Доброго дня!")
//     }else{console.log("Невірний пароль")}
// }else{console.log("Я вас не знаю")}

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-ролл");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift("Country", "Reggae");
// console.log(genres);

// const values = '8 11';
// const arr = values.split(' ');

// const length = Number(arr[0]);
// const width = Number(arr[1]);
// const square = length * width;
// console.log(square);

// const fruits = ['apple', 'grape', 'pearch', 'banana', 'lemon'];
// for (let i = 0; i < fruits.length; i += 1){
//     console.log(`${i+1}:`,fruits[i])
// };

// const names = 'James,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const arrNames = names.split(',');
// const arrPhones = phones.split(',');
// for (let n = 0, p = 0; n < arrNames.length; n += 1){
//     console.log(`${arrNames[n]}:${arrPhones[p]}`)
// };

// const string = "Welcome to the future";
// // const result = string.split(" ").slice(1, -1).join(" ");
// // console.log(result);
// const result = string.split(' ').reverse().join(' ');
// console.log(result);

// const langs = ['pyton', 'javascript', 'c++', 'hascel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i += 1){
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i, 1)[0];
//         langs.unshift(result);
//         console.log(result);
//     }
// }
// console.log(langs);

// const number = [2, 17, 94, 1, -23, 37];
// let min;
// for (let i = 0; i < number.length; i += 1){
//     if (number[i] < number[0]){
//         min = number[i];
//     }
// }
// console.log(min);

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     return Number((weight / Math.pow(height, 2)).toFixed(1));

// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi);

// function min(a, b) {
//     // if (a > b) {
//     //     return b;
//     // }
//     // return a;
//     return a > b ? b : a;
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// function getRectAria(dimensions) {
//    dimensions= dimensions.split(' ');
//     return Number(dimensions[0]) * Number(dimensions[1]);
// }

// console.log(getRectAria('8 11'));
// console.log(getRectAria('46 11'));
// console.log(getRectAria('8 112'));

// function logItems(items) {
//     for (let i = 0, n = 1; i < items.length; i+=1,n+=1) {
//         console.log(`${n} - ${items[i]}`)
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax']);

// function printContactsInfo(names, phones) {
//     names = names.split(",");
//     phones= phones.split(",");
//     for (let i = 0; i < names.length; i += 1){
//         console.log(`${names[i]} - ${phones[i]}`)
//     }
// }

// printContactsInfo('James,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');
// const names = 'James,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// function findLargestNumber(){
//     const arr = [...arguments];
//     let max = arr[0];
//     for (const num of arr){
//         if (num > max) {
//             max = num
//         }
//     }
//     return max
// }
// console.log(findLargestNumber(2, 17, 94, 1, 23, 37));
// console.log(findLargestNumber(49,4,7, 1, 83,12));

// function calAverage(...args) {
//     let total = 0;
//     for ( arg of args) {
//         total +=arg
//     }
//     return total/args.length;
// }

// console.log(calAverage(1,2,3));

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//      minutes = minutes % 60;
//     return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//     if (courses.includes(name)){
//         return 'Ви вже маєте такий курс';
//     }
//     courses.push(name);
// }
// addCourse('Express');
// console.log(courses);
// console.log(addCourse('CSS'));

// function removeCourse(name) {
//     const idx = courses.indexOf(name)
//     if (!!~idx) {
//         courses.splice(idx, 1);
//         return;
//     }
//     return "Курс із таким ім'ям  не знайдено";
// }
// removeCourse('React');
// console.log(courses);
// console.log(removeCourse('Vue'));

// function updateCourse(oldName, newName) {
//     const idx = courses.indexOf(oldName);
//     if (!!~idx) {
//         courses.splice(idx, 1, newName);
//         return;
//     }
//     return "Курс із таким ім'ям  не знайдено";
// }
// updateCourse('Express', 'NestJs');
// console.log(courses);
// console.log(updateCourse('Express', 'NestJs'))

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium:true,
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key} : ${[key]}`)
// }

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130,
// };
// let sum = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//     sum += value;
// }
// console.log(sum);

// const stones = [
//     {
//         name: 'Emerald',
//         price: 1300,
//         quantity:4,
//     },
//     {
//         name: 'Dymond',
//         price: 2700,
//         quantity:3,
//     },
//     {
//         name: 'Sapphire',
//         price: 400,
//         quantity:7,
//     },
// ]

// function calcTotalPrice(stones, stounName) {
//     for (const stone of stones) {
//         if (stone.name === stounName) {
//             return stone.price * stone.quantity;
//         }
//     }
//     return 'Такого каменя не має';
//     }

// console.log(calcTotalPrice(stones, 'Emerald'));
// console.log(calcTotalPrice(stones, 'lkjhg'));

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// }
// Object.freeze(Transaction);

// const account = {
//     balance: 0,
//     transactions: [
//         {id: 16, amount: 1000, type: 'deposit'},
//     ],

//     createTransaction(amount,type) {
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },

//     deposit(amount) {
//         if (amount <= 0) {
//           return 'Error'
//         }
//         const transactionItem = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.balance += amount;
//         this.transactions.push(transactionItem);
//         console.log(transactionItem);

//     },

//     withdraw(amount) {
//         if (amount > this.balance||amount<=0) {
//             return 'Не вистачає коштів на рахунку';
//         }
//         const transactionItem = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.balance -= amount;
//         this.transactions.push(transactionItem);
//         console.log(transactionItem);
//     },

//     getBalance() {
//         return this.balance;
//     },

//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction;
//             }
//             return "Empty";
//         }
//     },

//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type===type) {
//                 sum += transaction.amount;
//             }
//         }
//         return sum;
//     },
// }

// account.deposit(1000);
// account.deposit(2000);
// account.withdraw(1500);
// account.getTransactionDetails(16)

// console.log(account)
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(16))

// const arr = [22, 43, 3, 14, 75, 86];
// const min = Math.min(...arr);
// console.log(min)
// /**
//  * розраховуємо індекс маси людини
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(2));
// }

// console.log(calcBMI({ weight:'70,4', height:'1.75' }))

// /**
//  *
//  * @param {Object} obj
//  *
//  */
// function printContactsInfo({names, phones}) {
//     names = names.split(",");
//     phones= phones.split(",");
//     for (let i = 0; i < names.length; i += 1){
//         console.log(`${names[i]} - ${phones[i]}`)
//     }
// }

// printContactsInfo({names:'James,William,Solomon,Artemis', phones:'89001234567,89001112233,890055566377,890055566300'});

// /**
//  *
//  * @param {Object{String,Object}} obj
//  * @returns String reported quantity items on stock
//  */
// function getStockReport({ companyName, stock }) {
//     let total = 0;
//     for (const value of Object.values(stock)) {
//         total += value;
//     }

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: { repairBots: 150, defenceBots: 50 },
//   })
// );
// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: { shoes: 20, skirts: 10, hats: 5 },
//   })
// );

// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt:new Date(),
//         list:'default',
//         ...partialContact,
//     }
// }
// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// console.log(createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
// }));
// console.log(createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
// }));

// function transformUserName({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props,
// }
// }

// console.log(transformUserName({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
// }));
// console.log(transformUserName({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount:20,
// }))

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj,
//     }
//     callback(product);
//     console.log(product);
// }
// function logProduct(obj) {
//     console.log(obj.name)
// }
// function logTotalPrice({price,quantity}) {
//     console.log(price*quantity)
// }

// createProduct({
//     name: 'apple',
//     price: 30,
//     quantity: 3,
// }, logProduct);
// createProduct({
//     name: 'lemon',
//     price: 20,
//     quantity: 5,
// }, logTotalPrice);

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (this.balance < amount) {
//       onError("Not enough in the account");
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`Transaction complete ${amount}, balance ${this.balance}`);
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (amount <= 0) {
//       onError("Nice, try Bro");
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`Added! ${amount}, balance ${this.balance}`);
//   },
// };

// const handleSuccess = (message) => console.log(`Success! ${message}`);

// const handleError = (message) => console.log(`Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// function calcAverage(...args) {
//     let total=0;
//     for (let i = 0; i < args.length; i += 1){
//         total += args[i];
//     }
//     return total / args.length;
    
// }
// const calcAverage = (...args) => {
//     let total = 0;
//     args.forEach(arg => total += arg);
//     return total / args.length;
// }

// console.log(calcAverage(1, 2, 3, 4));

// const cars = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//     { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//     { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//     { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//     { make: 'Toyota', model: 'Tucoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//     { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//     { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const getModels =cars=> cars.map(car => car.model);
// console.log(getModels(cars));
// console.log(cars);

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => ({
//         ...car,
//         price:car.price*(1-discount)
//     }));
// };
// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));

// const filterByPrice=(cars, treshold) => {
//     return cars.filter(({price}) => price<treshold)
// }

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// const getCarsWithDicount = cars => cars.filter(({ onSale }) => onSale);

// console.log(getCarsWithDicount(cars))

// const getCarsWithType = (cars, type) => cars.filter(({ type: carType }) => carType === type);

// console.log(getCarsWithType(cars, 'sedan'));
// console.log(getCarsWithType(cars, 'suv'));

// const getCarByModel = (cars, model) => cars.find(({ model: carModel }) => carModel === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// const sortByAscendingAmount = (cars) => [...cars].sort((a, b) => a.price - b.price);
// console.table(sortByAscendingAmount(cars));

// const sortByModel = (cars, order) => {
//     if (order === 'asc') {
//         return [...cars].sort((a, b) => a.model.localeCompare(b.model))
//     } else { return [...cars].sort((a, b) => b.model.localeCompare(a.model)) }
// };
// const sortByModel = (cars, order) =>[...cars].sort((a,b)=>order==='asc'?a.model.localeCompare(b.model):b.model.localeCompare(a.model))

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// const getTotalAmount = (cars) => cars.reduce((acc, { amount }) => acc + amount, 0);
// console.log(getTotalAmount(cars));

// const getModelOnSale = (cars) => cars.filter(({ onSale }) => onSale).map(({model})=>model)
// console.log(getModelOnSale(cars))

// /**
//  * Get cars onSale and sort by price
//  * @param {Array} cars array with obj
//  * @returns {Array} Масив обʼєктів відфльтрованих по властивості onSale та сортованих за зростанням ціни
//  */
// const getSortedCarsOnSale = (cars) => cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);
// console.log(getSortedCarsOnSale(cars))

// const string = 'asljafkjabdfmnlkghdlkfn';
// const result = string.split('').reduce((acc, letter) => {
//     acc.hasOwnProperty(letter) ? acc[letter] += 1 : acc[letter] = 1;
//     return acc;
// },{})


// console.log(result);

// const arr = ['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault'];

// function logCars(arr) {
//     const result=arr.reduce((acc, car,idx) => {
//         return acc+`${idx+1} - ${car}\n`
//     }, arr.length?`Загальна кількість авто ${arr.length}\n`:'Вибачте авто не має')
//     return result;
// }

// console.log(logCars(['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault']));
// console.log(logCars([]))

// function checkObj(obj, checkProp) {
//     // Змініть код лише під цим рядком
//     if (obj.hasOwnProperty(checkProp)) {
//         return obj[checkProp]
//     }
//     return "Not found"
// }
// console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"))
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"))