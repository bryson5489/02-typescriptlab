export class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(name: string) {
    return `${this.greeting},${name}`;
  }
}

const bryson = new Greeter("Hello");

console.log(bryson);
