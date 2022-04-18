function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,

    
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark){
  if(this.marks === undefined){  
     this.marks = [mark];
    } else {
     this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...mark){
   this.marks = mark;
}

Student.prototype.getAverage = function(){
  let s = 0;
  for (let i = 0; i < this.marks.length; i++){
      s += this.marks[i]
   }
   return s/this.marks.length;
}

Student.prototype.exclude = function(reason){
  delete this.marks 
  delete this.subject
  this.excluded  = reason;
   } 

}
const student1 = new Student();
const student2 = new Student();
const student3 = new Student();