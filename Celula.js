class Celula {
  constructor (life, neighbors) {
    this.life = life
    this.neighbors = neighbors
  }

  // CONDICIONES PARA LA CELULA
  // 1 = VIVO    0 = MUERTO
  getLife () {
    return this.life
  }

  setLife (life) {
    this.life = life
  }

  setNeighbors (Neighbors) {
    this.neighbors = Neighbors
  }

  toString () {
    if (this.life === 0) {
      return '.'
    } else {
      return '*'
    }
  }

  getNeighbors () {
    return this.neighbors
  }
};

module.exports = Celula;
