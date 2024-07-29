class Instrument {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  play() {
    console.log(`Can you play ${this.name}?`);
  }

  tune() {
    console.log(`Do you know how to tune the ${this.name}?`);
  }
}

class StringInstrument extends Instrument {
  constructor(name, type, numberOfStrings) {
    super(name, type);
    this.numberOfStrings = numberOfStrings;
  }

  tune() {
    console.log(
      `Do you know how to tune a ${this.name} with ${this.numberOfStrings} strings?`
    );
  }
}

class PercussionInstrument extends Instrument {
  constructor(name, type, drumSize) {
    super(name, type);
    this.drumSize = drumSize;
  }

  tune() {
    console.log(
      `Do you know how to tune a ${this.name}? This one's size is ${this.drumSize} inches `
    );
  }
}

const guitar = new StringInstrument('Guitar', 'String', 4);
guitar.play();
guitar.tune();

const drum = new PercussionInstrument('Darbuka', 'Percussion', 15);
drum.play();
drum.tune();
