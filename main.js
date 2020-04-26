// Template pattern

class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  work() {
    return `${this._name} handles ${this.responsiblities()}`;
  }

  paid() {
    return `${this._name} getting paid ${this._salary}`;
  }
}

class Developoer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsiblities() {
    return "Development";
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsiblities() {
    return "Testing";
  }
}

const dev = new Developoer("Joshua", 2000);
console.log(dev.work());
console.log(dev.paid());

const tester = new Tester("Steve", 10000);
console.log(tester.work());
console.log(tester.paid());
