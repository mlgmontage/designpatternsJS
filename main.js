// Observer pattern

class Subject {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  fire(commit) {
    this._observers.forEach((observer) => {
      observer.update(commit);
    });
  }
}

class Observer {
  constructor(state) {
    this._initialState = state;
    this.state = state;
  }

  update(commit) {
    if (commit === "INC") {
      this.state++;
    } else if (commit === "DEC") {
      this.state--;
    } else {
      this.state = this._initialState;
    }
  }
}

const subject = new Subject();

// Observers
const obs1 = new Observer(4);
const obs2 = new Observer(8);

subject.subscribe(obs1);
subject.subscribe(obs2);

subject.fire("INC");
subject.fire("INC");

console.log(obs1.state, "observer 1");
console.log(obs2.state, "observer 2");

subject.unsubscribe(obs2);
subject.fire("INC");

console.log(obs1.state, "observer 1");
console.log(obs2.state, "observer 2");
