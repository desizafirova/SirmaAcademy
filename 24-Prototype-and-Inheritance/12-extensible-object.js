const cloneObject = {
  extend(template) {
    for (let key in template) {
      if (template.hasOwnProperty(key)) {
        if (typeof template[key] === 'function') {
          Object.getPrototypeOf(this)[key] = template[key];
        } else {
          this[key] = template[key];
        }
      }
    }
  },
};

const template = {
  firstProp: 1,
  secondProp: 2,
  firstMethod() {
    console.log('1st method');
  },
  secondMethod() {
    console.log('2nd method');
  },
};

const newObject = Object.create(cloneObject);
newObject.extend(template);
