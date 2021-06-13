class Vida {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sinVida = false;
  }

  mostrar() {
    image(corazon, this.x, this.y);
  }
  //verificar que pierde una vida
  pierdeVidas() {}

  reiniciaVidas() {
    if (x > this.x && x < this.x + 46 && y > this.y && y < this.y + 30) {
      this.dead = true; // muere cuando lo tocan no?
      return true;
    }
    return false;
  }
}
