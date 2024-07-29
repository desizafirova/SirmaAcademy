class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  applyDiscount() {
    const newPrice = this.price - this.price * 0.1;
    console.log(
      'After applying the discount, the price is' +
        ' ' +
        '$' +
        newPrice.toFixed(2)
    );
  }
}

class Electronics extends Product {
  constructor(id, name, price, warrantyPeriod, brand) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
    this.brand = brand;
  }
}

class Clothing extends Product {
  constructor(id, name, price, size, material) {
    super(id, name, price);
    this.size = size;
    this.material = material;
  }
}

const laptop = new Electronics(21, 'Laptop', 1500, 24, 'Lenovo');
laptop.applyDiscount();

const dress = new Clothing(2, 'Dress', 50, 'S', 'Cotton');
dress.applyDiscount();
