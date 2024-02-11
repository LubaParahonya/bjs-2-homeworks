class PrintEditionItem {

  constructor(name, releaseDate, pagesCount, state, type){
    this.name = name
    this.releaseDate = releaseDate
    this.pagesCount = pagesCount
    this.state = 100
    this.type = null

  }
  fix(){
    this.state = this.state * 1.5
  }

  set state(newState) {
    if(newState < 0){
    this._state = 0
    }
    else if(newState > 100){
      this._state = 100
      } else {
    this._state = newState
    }

  }

  get state(){
    return this._state
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


class Library {
  constructor(name){
    this.name = name
    this.books = []
  }


  addBook(book){
    if(book.state > 30){
    return this.books.push(book)
    }
  }

  findBookBy(type, value){
    for(let i = 0; i < this.books.length; i++ ){
      if(this.books[i][type] === value){
        return this.books[i]
      }   
    }
    return null 
  }


giveBookByName(bookName){
    for(let i = 0; i< this.books.length; i++){
      if(this.books[i].name === bookName){
        let returnBook = this.books.splice(i, 1)[0]
        return returnBook
      }
    }
    return null 
  } 
}


class Student {
  constructor(name){
    this.name = name
    this.marks = []
  }



  addMark(mark, subject) {
    if(2 <= mark && mark <= 5){
    if(this.marks.hasOwnProperty(subject) === false){
      this.marks[subject] = []
      this.marks[subject].push(mark)
    } else {
      this.marks[subject].push(mark)
    }
    }
  }

  getAverageBySubject(subject){
    if(this.marks.hasOwnProperty(subject) === false){ 
      return 0
    }
      let markArr =  this.marks[subject]
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
    const averageMarks= keyArr.reduce((acc, item) => {
       return acc += this.getAverageBySubject(item)
    }, 0)
    return averageMarks / keyArr.length
  }
}