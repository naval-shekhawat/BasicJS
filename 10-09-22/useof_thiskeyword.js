function Fruit(name, price, unit, quantity) { // constructor function
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.quantity = quantity;
  }
  
  
  Fruit.prototype.showDetails = function() {
    console.log(`The price of ${this.name} is ${this.price} ${this.unit}`);
  }
  
  Fruit.prototype.sell = function(quantitySold) {
    this.quantity = this.quantity - quantitySold;
  }
  
  let apple = new Fruit("Fuji", 240, "kg", 100);
  let banana = new Fruit("Yelaki", 40, "dozen", 200);
  
  apple.sell(20);
  console.log(apple.quantity);
  console.log(banana.quantity);
  
  console.log(apple instanceof Fruit);
  console.log(banana instanceof Fruit);
  apple.showDetails();
  banana.showDetails();
  