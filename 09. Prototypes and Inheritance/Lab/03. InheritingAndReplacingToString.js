function solve() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      let className = this.constructor.name;
      return `${className} (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(teacherName, teacherEmail, subject) {
      super(teacherName, teacherEmail);
      this.subject = subject;
    }

    toString() {
      let base = super.toString().slice(0, -1);
      return `${base}, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(studentName, studentEmail, course) {
      super(studentName, studentEmail);
      this.course = course;
    }

    toString() {
      let base = super.toString().slice(0, -1);
      return `${base}, course: ${this.course})`;
    }
  }

  /*class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    toString() {
      return `Person (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
    toString() {
      return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }
    toString() {
      return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
  }*/
  
  return {
    Person,
    Teacher,
    Student,
  };
}
