// State pattern

class Light {
  constructor(light) {
    this.light = light;
  }
}

class GreenLight extends Light {
  constructor() {
    super("green");
  }

  sign() {
    return "GO";
  }
}

class YellowLight extends Light {
  constructor() {
    super("yellow");
  }

  sign() {
    return "STEADY";
  }
}

class RedLight extends Light {
  constructor() {
    super("red");
  }

  sign() {
    return "STOP";
  }
}

class TrafficLight {
  constructor() {
    this._states = [new GreenLight(), new YellowLight(), new RedLight()];
    this.state = this._states[0];
  }

  change() {
    const totalStates = this._states.length;
    const currentIndex = this._states.findIndex(
      (light) => light === this.state
    );
    if (currentIndex + 1 < totalStates) {
      this.state = this._states[currentIndex + 1];
    } else {
      this.state = this._states[0];
    }
  }

  sign() {
    return this.state.sign();
  }
}

const trafficLight = new TrafficLight();

console.log(trafficLight.sign());
trafficLight.change();

console.log(trafficLight.sign());
trafficLight.change();

console.log(trafficLight.sign());
trafficLight.change();

console.log(trafficLight.sign());
trafficLight.change();

console.log(trafficLight.sign());
trafficLight.change();

console.log(trafficLight.sign());
