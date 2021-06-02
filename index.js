/* eslint-disable no-tabs */
/* eslint-disable no-undef */

class Game {
  constructor () {
    this.rows = 4
    this.columns = 8
    this.resultArrayCell = ''
    this.resutNewArray = ''
    this.newArray = []
    this.cell = ''
    this.arrayCells = []
    this.loopControler = 0
  }

  getRows () {
    return this.rows
  }

  getColumns () {
    return this.columns
  }

  getArrayCell () {
    return this.resultArrayCell
  }

  getNewArray () {
    return this.newArray
  }

  initGame () {
    // resultArrayCell = ''
    createArrayCell()
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns; y++) {
        const randomvar = Math.random()
        this.arrayCells[x][y] = checkRamdomVar(randomvar, this.arrayCells[x][y])
        this.resultArrayCell += this.arrayCells[x][y].toString()
      }
      this.resultArrayCell += '\n'
    }
    this.newArray = this.arrayCells
    return this.resultArrayCell
  }

  showResult (array) {
    resultNewArray = ''
    for (let x = 0; x < array.length; x++) {
      for (let y = 0; y < array[x].length; y++) {
        resultNewArray += this.arrayCells[x][y].toString()
      }
      resultNewArray += '\n'
    }
    return resultNewArray
  }

  createArrayCell () {
    this.arrayCells = new Array(rows)
    for (i = 0; i < this.arrayCells.length; i++) {
      this.arrayCells[i] = new Array(columns)
    }
  }

  rulesCell (cell, rows, columns) {
    if ((cell.getLife() == 1) && (cell.getNeighbors() < 2)) {
      newArray[rows][columns].setLife(0)
    } else if ((cell.getLife() == 1) && (cell.getNeighbors() > 3)) {
      newArray[rows][columns].setLife(0)
    } else if ((cell.getLife() == 0) && (cell.getNeighbors() == 3)) {
      newArray[rows][columns].setLife(1)
    } else {
      newArray[rows][columns] = cell
    }
  }

  checkRamdomVar (randomvar, arrayCells) {
    if (randomvar >= 0.5) {
      arrayCells = new Celula(0, 0)
    } else {
      arrayCells = new Celula(1, 0)
    }
    return arrayCells
  }

  iteration (ParamarrayCells) {
    for (let x = 0; x < ParamarrayCells.length; x++) {
      for (let y = 0; y < ParamarrayCells[x].length; y++) {
        let neighbors = 0
        neighbors = countNeighborsAround(ParamarrayCells, neighbors, x, y)
        ParamarrayCells[x][y].setNeighbors(neighbors)
        rulesCell(ParamarrayCells[x][y], x, y)
      }
    }
  }

  countNeighborsAround (ParamarrayCells, neighbors, x, y) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        try {
          neighbors = cheackIfNeighborIsLife(ParamarrayCells[x + i][y + j], ParamarrayCells[x][y], neighbors)
        } catch (e) {
  
        }
      }
    }
    return neighbors
  }

  cheackIfNeighborIsLife (ParamarrayCellsAround, ParamarrayCellsSimple, neighbors) {
    if (ParamarrayCellsAround.getLife() == 1) {
      if (ParamarrayCellsSimple.getLife() == 1 && i == 0 && j == 0) {
      } else {
        neighbors++
      }
    }
    return neighbors
  }

  play () {
    const resultGame = this.initGame()
    // console.log(resultGame)

    const numberOfGenerations = 5
    for (let i = 0; i < numberOfGenerations; i++) {
      console.log('generacion:' + (i + 1))
      iteration(arrayCells)
      const showRes = showResult(this.newArray)
      console.log(showRes)
      this.arrayCells = this.newArray
    }
  }
}

//function sumTd (x, y) {
//  return x + y
//}

//play()
//const newcell = new Celula(0, 4)
