class Player {
  constructor() {
    this.name = "";
    this.totalCoins = 0;
    this.status = "Small";
    this.hasStar = false;
  }

  setName(namePicked) {
    if (namePicked === "Mario" || namePicked === "Luigi") {
      this.name = namePicked;
    }
   else {
      console.log("Invalid name.");
    }
  }

  gotHit() {
    switch (this.status) {
      case "Powered Up":
        this.status = "Big";
        break;
      case "Big":
        this.status = "Small";
        break;
      case "Small":
        this.status = "Dead";
        break;
      case "Dead":
        break;
    }
    this.hasStar = false;
  }

  gotPowerup() {
    switch (this.status) {
      case "Small":
        this.status = "Big";
        break;
      case "Big":
        this.status = "Powered Up";
        break;
      case "Powered Up":
        this.hasStar = true;
        break;
    }
  }

  addCoin() {
    this.totalCoins++;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Status: ${this.status}`);
    console.log(`Total Coins: ${this.totalCoins}`);
    console.log(`Star: ${this.hasStar}`);
  }
}

const player = new Player();
player.setName("Mario");
player.addCoin();
player.gotHit();
player.gotPowerup();
player.print();


function getRandomRange() {
  return Math.floor(Math.random() * 3);
}


const intervalId = setInterval(() => {
  const randomValue = getRandomRange();
  if (randomValue === 0) {
    player.gotHit();
  } else if (randomValue === 1) {
    player.gotPowerup();
  } else {
    player.addCoin();
  }
  player.print();
  if (player.status === "Dead") {
    clearInterval(intervalId);
  }
}, 1000);
