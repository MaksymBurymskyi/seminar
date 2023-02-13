// 1.
// Створіть клас Shape, який має три властивості: name, sides і sideLength. Цей клас моделює лише фігури, у яких усі сторони мають однакову довжину, як квадрат чи рівносторонній трикутник.

// Додайте конструктор до цього класу. Конструктор приймає аргументи для властивостей name, sides і sideLength та ініціалізує їх.
// Додати новий метод методу calcPerimeter() до класу, який обчислює його периметр (довжину зовнішнього краю фігури) і записує результат в консоль.
// Створіть новий екземпляр класу Shape під назвою square. Передайте йому імʼя, 4 сторони та довжиною сторони 5.
// Викличте  метод calcPerimeter() для екземпляра, щоб перевірити, чи він записує результат обчислення в консоль браузера належним чином.
// Створіть новий екземпляр Shape під назвою triangle, з назвою triangle, 3 сторонами та довжиною сторони 3.
// Викликаємо triangle.calcPerimeter(), щоб перевірити, чи працює нормально.

class Shape {
  constructor(name, sides, sidelength) {
    this.name = name;
    this.sides = sides;
    this.sidelength = sidelength;
  }
  calcPerimeter() {
    const perimeter = this.sidelength * this.sides;
    console.log(perimeter);
  }
}

let square = new Shape("square", 4, 5);

square.calcPerimeter();

let triangle = new Shape("triangle", 3, 3);

triangle.calcPerimeter();

// -------------------------------------------------------------------------------

// 2.
// Клас Clock написаний в функциональному стилі.
// Перепишіть його, використовуючи  синтаксис класів.

// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();

// -------------------------------------------------------------------------------

// 3.
// Ми маємо клас Clock. Зараз він виводить час кожну секунду
// Створіть новий клас ExtendedClock, який успадковуватиметься від Clock і додайте параметр precision – кількість мілісекунд між «тіками». Встановіть значення 1000 (1 секунда) за замовчуванням.

// -------------------------------------------------------------------------------

// 4.
// У коді нижче клас Rabbit успадковує Animal.
// На жаль, об'єкт класу Rabbit не створюється. Що не так? Виправте помилку.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Білий кролик"); // Error: this is not defined
// console.log(rabbit.name);
