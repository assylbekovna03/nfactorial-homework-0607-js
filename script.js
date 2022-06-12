// Dalida's hotel
// 1. Переменные - let, const
// 2. Типы данных - string, number, boolean, null, undefined
// 3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже), добавление функции в объект
// 4. Массивы - использовать все методы, которые мы прошли. Не забывать про map, filter, rest и spread операторы. Еще slice ;)
// 5. Сравнения - нестрогое и строгое, условный оператор, оператор нулевого слияния, преобразование к логическому типу, switch
// 6. Циклы - for, while, do while
// 7. Функции - обычные, function expression, arrow functions, destructuring
// 8. Импорт и экспорт - named export & import, export & import as, default export & import 

import chalk from "chalk";
// 1
let employee = "Beknar";
let director = "Dalida";

const hotel_name = "Four seasons";
const city = "Almaty";
let hotelIsOpened = true;
let now = new Date();
if(now.getHours() > 23 && now.getHours() < 7){
 console.log("Unfortunatelly, We accept new guests untill 23:00. Come to the tomorrow. We will opened at 07:00 AM");
 hotelIsOpened = false;
}
if(hotelIsOpened){
  console.log(chalk.blue("Welcome to the hotel \"Four Seasons\". My name is" + director
   + " founder of this hotel. This is my colleague " + employee + " Beknar. He is head of employees."))
  console.log(chalk.yellow("Beknar: \n Let's me give some information about our hotel:")); 

  // 
  let vacationer = "Aruzhan";
  if(now.getHours() > 4 && now.getHours() < 12){
    const greeting1 = (name = "vacationer") => "Good morning " + name;
  console.log(greeting1(vacationer));
  console.log(greeting1());
  }
  if(now.getHours() > 12 && now.getHours() < 4){
    const greeting2 = (name = "vacationer") => "Good day " + name;
  console.log(greeting2(vacationer));
  console.log(greeting2());
  }
  if(now.getHours() > 4 && now.getHours() < 23){
    const greeting3 = (name = "vacationer") => "Good evening " + name;
  console.log(greeting3(vacationer));
  console.log(greeting3());
  }
  
let services = ["restaurant" , "cafeteri", "zona otdyha", 
  "coworking zone", "swimming pool", "fitness center", "parking"];

let services2 = [...services];
console.log("There is copy of list of services:\n" + services2);
  
  function printServices(){
    return services.length + " services. These are "  + services;
  }
  
  
  let hotel = {
    name: "Four Seasons",
    priceForOneDay: 15000,
    services: 7,
    address: "Street Satbayev"
  };
  
  let countOfEmployees = 147;
  let countOfVacations = 58;

  const sumOfPeople = (...sum) => {
    return sum.reduce((a,b) => a + b, 0);
  }
  console.log(chalk.green("This time in our hotel there are " + sumOfPeople(countOfEmployees, countOfVacations) + " people. "
   + countOfEmployees + " number of employees and " + countOfVacations + " number of vacationers. "));
  function infoAboutHotel(){
    console.log(` Our hotel is situated in the ${hotel.address}. The price for one day for one person is ${hotel.priceForOneDay} tenge.`);
    console.log(" We have a " + printServices() + " etc.");
  }
  infoAboutHotel();
  
  let rooms = ["one-econom-seats", "two-econom-seats", "three-econom-seats", 
  "lux-one-seats", "lux-two-seats", "lux-three-seats", "room for family"];


  let econom = rooms.filter((rooms) => rooms.includes("econom"));
  console.log(chalk.green("Our econom rooms are: " +  econom.toString()));

  let lux = rooms.filter((rooms) => rooms.includes("lux"));
  console.log(chalk.red("Our lux rooms are: " + lux.toString()));
  console.log(chalk.blue("And only one room for whole family: " + rooms[rooms.length - 1]));

  // let check = rooms.map((rooms) => rooms[0] == "one room");
  // console.log(check);

  // let key;
  // for(key in rooms){
  //   console.log(key);
  // }

function spellName(){
  console.log(...hotel.name);
}
spellName();
}












