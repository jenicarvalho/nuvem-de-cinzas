class Nuvens {

  constructor(land) {
    this.airports = 3
    this.clouds = 4
    this.landArea = land
    this.matrix = this.matrixBase()
  }

  matrixBase = () => {
    let matrix = [
      'N', '.', '.', '.', '.', '.', '.', '.', '.', '.',
      '.', '.', 'A', '.', '.', '.', '.', 'A', '.', '.',
      '.', 'N', '.', '.', '.', '.', '.', '.', '.', '.',
      '.', '.', '.', '.', '.', '.', '.', '.', '.', 'N',
      '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
      '.', '.', 'N', 'A', '.', '.', '.', '.', '.', '.',
      '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
      '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
      '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
      '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'
    ]

    const newMatrix = matrix.map((item, index, matrix) => {

      // verifica se é primeira linha e é maior o tamanho da land (9) - verifica se a linha superior é N
      if (index > this.landArea - 1 && matrix[index - this.landArea] === 'N') {
        return 'N'
      }

      // verifica se é a ultima linha e verifica se a linha inferior é N
      if (index < matrix.length - this.landArea && matrix[index + this.landArea] === 'N') {
        return 'N'
      }

      // verifica se o indice anterior é N
      if (matrix[index - 1] === 'N') {
        if (index % this.landArea !== 0) {
          return 'N'
        }
      }

      // verifica se o proximo item é N
      if ((index === 1 || index + 1 % this.landArea !== 0) && matrix[index + 1] === 'N') {
        return 'N'
      }

      // retorno tudo
      return item
    })

    return {
      dayOne: matrix,
      dayTwo: newMatrix
    }


    // for (let index = 0; index < matrix.length; index++) {

    //   if (matrix[index] === 'N') {
    //     newMatrix.push('N')
    //     newMatrix.push('N')
    //     index++
    //   } else {
    //     newMatrix.push(matrix[index])
    //   }
    // }

  }
}

export default Nuvens