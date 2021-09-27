var person = {
  firstName: 'Calvin',
  lastName: 'La',
  hobby: 'basketball'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
person.job = 'jerk';
person.previousJob = 'geek';

console.log("This person's full name is: " + fullName);
console.log("This person's job is: " + person.job);
console.log("This person's previous job was: " + person.previousJob);
console.log(person);
