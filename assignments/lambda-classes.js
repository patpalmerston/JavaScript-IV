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
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student} receives a perfect score in ${subject}.`
  }
}// Child

class Student extends Instructor {
  constructor(stuAttrs){
    super(stuAttrs)
    this.previousBackground = stuAttrs.previousBackground;
    this.className  = stuAttrs.className ;
    this.favSubjects = stuAttrs.favSubjects;
  }
  listsSubjects(array) {
    return array.forEach(x => console.log(x));
  }
  PRAssignment(student, subject) {
    return `${student} has submitted a PR for ${subject}.`
  }
  sprintChallenge(student, subject) {
    return `${student} has begun a sprint challenge on ${subject}.`
  }
}// GrandChild

class ProjectManager extends Student {
  constructor(proAttrs) {
    super(proAttrs)
    this.gradClassName  = proAttrs.gradClassName;
    this.favInstructor  = proAttrs.favInstructor ;
  };
  standUp(name, channel) {
    return `${name} announces to ${channel}, @channel standy times!`
  };
  debugsCode(name, student, subject) {
    return `${name} debugs ${student}'s code on ${subject}.`
  };
}

const professor1 = new Instructor({
  name: 'Jared',
  location: 'Colorado',
  age: 67,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `Hard lessons learned are not soon forgotten.`
});

const professor2 = new Instructor({
  name: 'Nancy',
  location: 'Toledo',
  age: 47,
  gender: 'female',
  favLanguage: 'React',
  specialty: 'Front-end',
  catchPhrase: `If you get stuck after 20 minutes, ask for help.`
});

const professor3 = new Instructor({
  name: 'Zak',
  location: 'Virginia',
  age: 37,
  gender: 'male',
  favLanguage: 'Less Compiler',
  specialty: 'Front-end',
  catchPhrase: `Make sure you take a break every 30 minutes.`
});


const student1 = new Student({
  name: 'Sarah',
  location: 'Ohio',
  age: 32,
  gender: 'Female',
  previousBackground: 'Teacher',
  className: 'CS234',
  favSubjects: ['Flex-box', 'Less', 'HTML'],
  catchPhrase: `I love learning.`
});

const student2 = new Student({
  name: 'Alex',
  location: 'California',
  age: 23,
  gender: 'male',
  previousBackground: 'dog walker',
  className: 'CS154',
  favSubjects: ['React', 'Less', 'CSS'],
  catchPhrase: `Sunshine is my friend.`
});

const student3 = new Student({
  name: 'Tormond Dragonsbane',
  location: 'Beyone the Wall',
  age: 184,
  gender: 'Non-Specific',
  previousBackground: 'Underworld Ruler',
  className: 'CS999',
  favSubjects: ['Justice', 'Combat', 'Rainbows'],
  catchPhrase: `From the darkness come the brightest of lights.`
});

const pm1 = new ProjectManager({
  name: 'Terry',
  location: 'Canada',
  age: 42,
  gender: 'male',
  gradClassName: 'CS234',
  favInstructor: 'Jared',
  catchPhrase: `Helping makes me happy.`
});

const pm2 = new ProjectManager({
  name: 'Mark',
  location: 'New Mexico',
  age: 22,
  gender: 'male',
  gradClassName: 'CS999',
  favInstructor: 'Zak',
  catchPhrase: `Sometimes I eat grasshoppers.`
});

const pm3 = new ProjectManager({
  name: 'Alia',
  location: 'Montana',
  age: 27,
  gender: 'female',
  gradClassName: 'CS12',
  favInstructor: 'Nancy',
  catchPhrase: `Jumping in puddles is lots of fun.`
});

console.log(professor1.demo('Math'));
console.log(professor1.grade(student1.name, 'English'));

console.log(student1.listsSubjects(student1.favSubjects))
console.log(student1.PRAssignment(student1.name, 'React'))
console.log(student1.sprintChallenge(student1.name, 'React'))

console.log(pm1.standUp(pm1.name, 'Web18'))
console.log(pm1.debugsCode(pm1.name, student1.name, 'HTML'))


