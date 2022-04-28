class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;

  }

  fix() {
    return this.state *= 1.5;
  }
  get state() {
    return this._state;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    }
    if (value > 100) {
      this._state = 100;
    }
    else {
      this._state = value;
    }
  }

}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.state = 100;
    this.type = 'magazine'
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.state = 100;
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.state = 100;
    this.type = 'novel';
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.state = 100;
    this.type = 'fantastic';
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, state = 100, type = null, author) {
    super(name, releaseDate, pagesCount, state = 100, type = null, author);
    this.type = "detective";
  }
}

class Library {
  constructor(name = ' ', books = []) {
    this.name = name;
    this.books = books;
  }

      addBook(book) {
        if (book._state > 30) {
          return this.books.push(book);
        }
        else {
          return this.books;
        }
      }

      findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
          if (type in this.books[i]) {
            if (this.books[i][type] === value) {
              return this.books[i];
            }
          }
        }
        return null
      }

      giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i]['name'] === bookName) {
            const result = this.books[i];
            this.books.splice(i, 1);
            return result
          }
        }
        return null;
      }
}


class Student {
  constructor(name) {
    this.name = name;
    this.grades = {};
  }
  
  addMark(grade, subject) {
    if (grade >= 1 && grade <= 5) {
      if (subject in this.grades) {
        this.grades[subject].push(grade);
        return this.grades;
      }
    else{
      this.grades[subject] = [];
      this.grades[subject].push(grade);
      return this.grades;
        }
      }
    }
  
    getAverage(){
      let all_balls = 0
      let sum_all_balls = 0
      for(let subject in this.grades){
        for (let i = 0; i < this.grades[subject].length; i++){
          all_balls += 1;
          sum_all_balls += Number(this.grades[subject][i])
        }
      }
      
       return sum_all_balls/all_balls;
    }
  
    getAverageBySubject(subject){
      let sum_all_balls = 0
      if (subject in this.grades){
        for (let i = 0; i < this.grades[subject].length; i++){
          sum_all_balls += Number(this.grades[subject][i]);
      }
        return sum_all_balls/this.grades[subject].length;
      }
        else {
          return `Несуществующий предмет`;
        }
    }
  }

  
