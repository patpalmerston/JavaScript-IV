// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }
  //Methods
  speak() {
    `Hello my name is ${this.name}, I am from ${this.location}.`
  }
} // Parent or Base Constructor

class Instructor extends Person {
  constructor(insAttrs){
    super(insAttrs)
    this.specialty = insAttrs.specialty;
    this.favLanguage = insAttrs.favLanguage;
    this.catchPhrase = insAttrs.catchPhrase;
  }
  demo() {
    return `Today we are learning about ${subject}.`
  }
  grade() {
    return `${student.name} receives a perfect score on ${subject}.`
  }
}// Child

class Student extends Instructor {
  constructor(stuAttrs){
    super(stuAttrs)
    this.previousBackground = stuAttrs.previousBackground;
    this.className  = stuAttrs.className ;
    this.favSubjects = stuAttrs.favSubjects;
  }
  listsSubjects() {
    return ` ${this.favSubjects}, ${this.favSubjects}, ${this.favSubjects}.`
  }
  PRAssignment() {
    return `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge() {
    return `${student.name} has begun sprint challenge on ${subject}.`
  }
}// GrandChild

class ProjectManager extends Student {
  constructor(proAttrs) {
    super(proAttrs)
    this.gradClassName  = proAttrs.gradClassName;
    this.favInstructor  = proAttrs.favInstructor ;
  }
  standUp() {
    return `${name} announces to ${channel}, @channel standy times!`
  }
  debugsCode() {
    return `${name} debugs ${student.name}'s code on ${subject}.`
  }
}