class Nuvens {

  constructor(land) {
    this.airports = 3
    this.clouds = 4
    this.landArea = land
    this.matrix = this.matrixBase()
  }

  newDay = (item, index, matrix) => {
    // item = conteudo; index = indice; matrix = matriz original

    // verifica se é primeira linha  
    // se o index é maior do a largura da area (9)
    // pego o indice atual, volto uma linha subtraindo a largura da area do indice
    // comparado se o valor do item daquele indice é N
    if (index > this.landArea - 1 && matrix[index - this.landArea] === 'N') {
      return 'N'
    }

    // verifica se é a ultima linha  
    // se o index é menor que o tamanho do array - a largura da area(linha)
    // pego o indice atual, avanço uma linha adicionando a largura da area ao indice
    // comparado se o valor do item daquele indice é N
    if (index < (matrix.length - this.landArea) && matrix[index + this.landArea] === 'N') {
      return 'N'
    }

    // verifico se não é um index da primeira coluna
    // evita adicionar N no primeiro item da linha inferior
    // comparo se o valor anterior é N
    if (index % this.landArea !== 0 && matrix[index - 1] === 'N') {
      return 'N'
    }

    // verifica se não é o último indice da linha
    // comparo se o próximo valor é N
    if (index % (this.landArea - 1) !== 0 && matrix[index + 1] === 'N') {
      return 'N'
    }

    // retorno tudo
    return item
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
      '.', '.', '.', '.', '.', '.', '.', '.', '.', 'N'
    ]

    const dayTwo = matrix.map(this.newDay)
    const dayThree = dayTwo.map(this.newDay)

    return {
      dayOne: matrix,
      dayTwo,
      dayThree
    }
  }
}

export default Nuvens
