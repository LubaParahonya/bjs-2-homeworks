class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type){
    this.name = name
    this.releaseDate = releaseDate
    this.pagesCount = pagesCount
    this.state = 100
    this.type = null

  }
  fix(){
    this.state = parseFloat(this.state.toFixed(2))* 1.5
    return this.state
  }

  set setState(newState) {
    if(newState < 0){
    this.state = 0
    }
    else if(newState > 100){
      this.state = 100
      } else {
    this.state = newState
    }

  }

  get getState(){
    return this.state
  }
}


class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state){
    super(name, releaseDate, pagesCount, state)
    this.type = "magazine"
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state){
    super(name, releaseDate, pagesCount, state)
    this.type = "book"
    this.author = author
  }
}

class NovelBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state){
    super(author, name, releaseDate, pagesCount, state)
    this.type = "novel"
  }
}

class FantasticBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state){
    super(author, name, releaseDate, pagesCount, state)
    this.type = "fantastic"
  }
}

class DetectiveBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state){
    super(author, name, releaseDate, pagesCount, state)
    this.type = "detective"
}
}


class Library extends Book {
  constructor(author, name, releaseDate, pagesCount, state){
    super(author, name, releaseDate, pagesCount, state)
    this.books = []
  }


  addBook(book){
    this.book = book
    return this.books.push(this.book)
  }

  findBookBy(type, value){
    this.type = type
    this.value = value
      if(this.book[type] === value){
        return this.book
  } else {
        return null
  }
  }

  
  giveBookByName(bookName){
    this.bookName = bookName
    if(this.book.name === this.bookName) {
      delete this.book.name
      return this.book.name
    }
    else {
      return null
    }
  } 
}

class Student {
  constructor(name){
    this.name = name
    this.marks = []
  }



  addMark(mark, subject) {
    this.mark = mark
    this.subject = subject
    if(2 <= this.mark <= 5){
    if(this.marks.hasOwnProperty(this.subject) === false){
      this.marks[this.subject] = []
      this.marks[this.subject].push(this.mark)
    } else {
      this.marks[this.subject].push(this.mark)
    }
    }
  }

  getAverageBySubject(){
    if(this.marks.hasOwnProperty(this.subject) === false){ 
      return 0
    }
      let markArr =  this.marks[this.subject]
      let average = markArr.reduce((acc, item, index, arr) =>
    {
      acc += item;
      if(index === arr.length - 1){
           return acc / arr.length;
      }
      return acc;
    })
    return average;

  }

  getAverage(){
    let keyArr = Object.keys(this.marks)
    keyArr.reduce((acc, item) => {
     return  acc += getAverageBySubject(item) / keyArr.length
    })
  }
}