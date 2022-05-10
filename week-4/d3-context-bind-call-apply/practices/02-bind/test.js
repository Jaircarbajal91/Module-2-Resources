// Your code here
const Employee = require('./employee');

const johnWick = new Employee('John Wick', 'Dog Lover');

setTimeout(() => {
  johnWick.sayName()
}, 2000)
// setTimeout(johnWick.sayOccupation.bind(johnWick), 2000)
