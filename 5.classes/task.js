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
    this.type = type
    this.value = value
    for(let i = 0; i < this.books.length; i++ ){
      if(this.books[i][type] === value){
        return this.books[i]
      }
      else{
        return null
      }
      
    }
    
  }


  giveBookByName(bookName){
    for(let i = 0; i< this.books.length; i++){
      if(this.books[i].name === bookName){
        this.books.slice(i)
        return this.books[i].name
      }
      else{
        return null
      }
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