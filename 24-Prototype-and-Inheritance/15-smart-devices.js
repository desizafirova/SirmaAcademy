class Device {
  constructor(brand, model, batteryLife) {
    this.brand = brand;
    this.model = model;
    this.batteryLife = batteryLife;
  }

  charge() {
    console.log(`The device is charging...`);
  }
  turnOn() {
    console.log(`This device is turned on.`);
  }
}

class Smartphone extends Device {
  constructor(brand, model, batteryLife, screenSize, os, chargingTime) {
    super(brand, model, batteryLife);
    this.screenSize = screenSize;
    this.os = os;
    this.chargingTime = chargingTime;
  }

  charge() {
    console.log(
      `This smartphone, ${this.brand} - ${this.model}, has ${this.batteryLife}h of battery life. The charging time is ${this.chargingTime}.`
    );
  }
}

class Smartwatch extends Device {
  constructor(
    brand,
    model,
    batteryLife,
    strapMaterial,
    waterResistance,
    chargingTime
  ) {
    super(brand, model, batteryLife);
    this.strapMaterial = strapMaterial;
    this.waterResistance = waterResistance;
    this.chargingTime = chargingTime;
  }

  charge() {
    console.log(
      `This smartwatch, ${this.brand} - ${this.model}, has ${this.batteryLife}h of battery life. The charging time is ${this.chargingTime}.`
    );
  }
}

const phone = new Smartphone(
  'Apple',
  'iPhone 14 Pro Max',
  48,
  '6.1 inch',
  'iOS',
  '90mins'
);
phone.charge();
phone.turnOn();

const watch = new Smartwatch(
  'Apple',
  'iWatch S9',
  41,
  'textile',
  'Yes',
  '50mins'
);
watch.charge();
watch.turnOn();
