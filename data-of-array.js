/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

// 01) Contar o número de categorias
let numCategory = booksByCategory.length // 2
console.log(`Temos ${numCategory} categorias de livros.`) // Temos 2 categorias de livros.

// 02) Contar o número de livros em cada categoria
function booksOfCategory(value) {
  let count = value.books.length
  let category = value.category
  console.log(`Para a categoria ${category} temos ${count} livros.`)
}

booksByCategory.forEach(booksOfCategory)
// Para a categoria Riqueza temos 3 livros.
// Para a categoria Inteligência Emocional temos 3 livros.

// 03) Contar o número de autores
let extractAuthor
let arrayAuthor = new Array()

function extractAuthors(authors) {
  function author(extract) {
    extractAuthor = extract.author
    arrayAuthor.push(extractAuthor)
    return arrayAuthor
  }

  authors.books.forEach(author)
}

booksByCategory.forEach(extractAuthors)

console.log(arrayAuthor) // ['T. Harv Eker', 'George S. Clason', 'Robert T. Kiyosaki e Sharon L. Lechter', 'Augusto Cury', 'Augusto Cury', 'Stephen R. Covey']

let cleanAuthors = [...new Set(arrayAuthor)]
console.log(cleanAuthors) // ['T. Harv Eker', 'George S. Clason', 'Robert T. Kiyosaki e Sharon L. Lechter', 'Augusto Cury', 'Stephen R. Covey']

console.log(`No total temos ${cleanAuthors.length} autores diferentes.`) // No total temos 5 autores diferentes.

// 04) Mostrar livros do autor Auguto Cury
let viewAuthor
let arrayAugusto = new Array()

function extractAuthorss(authorss) {
  function autho(extracts) {
    viewAuthor = extracts.author
    if (viewAuthor == 'Augusto Cury') {
      arrayAugusto.push(extracts.title)
    }
  }

  authorss.books.forEach(autho)
}

booksByCategory.forEach(extractAuthorss)
console.log(arrayAugusto) //['Você é Insubstituível', 'Ansiedade – Como enfrentar o mal do século']

// 05) Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
let arrayBooks = new Array()
let nameAuthor = 'Augusto Cury'

function extractAuthorsss(authorsss) {
  let viewAuthors = nameAuthor

  function auth(extractss) {
    if (extractss.author == viewAuthors) {
      arrayBooks.push(extractss.title)
    }
  }

  authorsss.books.forEach(auth)
}

booksByCategory.forEach(extractAuthorsss)

console.log(arrayBooks) // ['Você é Insubstituível', 'Ansiedade – Como enfrentar o mal do século']
