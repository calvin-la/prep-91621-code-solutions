function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log('addTwoNumbers Example result:', addTwoNumbers(2, 2));

function convertHoursToMinutes(hours) {
  return hours * 60;
}
console.log('convertHoursToMinutes example:', convertHoursToMinutes(2));

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
console.log('getGreeting example:', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  var num3 = num1 + num2;
  return num3 * 5;
}
console.log('addAndMultiplyBy5 example:', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  var num3 = num1 * num2;
  return num3 / 5;
}
console.log('multiplyAndDivideBy5 example:', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('subtractTwoNumbers exercise:', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log('getCircleCircumference example:', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log('getFullName example:', getFullName('Juan', 'Ramirez'));

function cube(number) {
  return Math.pow(number, 3);
}
console.log('cube example:', cube(5));
