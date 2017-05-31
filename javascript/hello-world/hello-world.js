class HelloWorld {
  hello(input) {
    const name = input || 'World';
    return `Hello, ${name}!`;
  }
}

module.exports = HelloWorld;
