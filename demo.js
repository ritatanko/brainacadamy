function createGreeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  }
}

var sayHi = createGreeting("Hi");
sayHi('Bob');

var sayHello = createGreeting("Hello");
sayHello("Anna");