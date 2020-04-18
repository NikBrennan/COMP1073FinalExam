// JavaScript Document

class Person {
  // Person requires these values to be created
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  // This function displays a greeting when called
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  // This function says goodbye to the person when called
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

// Create a person named Parth, age 20, Male, and interests include JS, Java, and PHP
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
// Create a person named Harmanpreet, age 22, Male, and interests include JS, C#, Relation DataBase
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// Teacher uses functions and properties of the Person class
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    // Uses the same construction as the Person class for name, age, gender, and interests
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

// Creates a teacher named Arthur, age 25, male, and is interested in Game of Thrones and Video Games
let arthur = new Teacher('Arthur', 25, 'male', ['Game of Thrones', 'Video Games']);