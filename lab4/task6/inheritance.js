let Person = {
  age: NaN,
  name: null,
  SetName: function (name) {
    if (typeof name === 'string') {
      this.name = name;
      return true;
    }
    return false;
  },
  SetAge: function (age) {
    if (typeof age === 'number' && !isNaN(age)) {
      this.age = age;
      return true;
    }
    return false;
  },
  Print: function () {
    return "Name: " + this.name + " Age: " + this.age;
  }
}

let Student = {
  course: 0,
  group: null,
  NextCourse: function () {
    if (this.course < 4) {
      this.course++;
      return true;
    }
    return false;
  },
  SetGroup: function (group) {
    this.group = group;
  },
  Print: function () {
    return "Name: " + this.name + " Age: " + this.age + " Group: " + this.group + " Course: " + this.course;
  }
}

let Teacher = {
  disciplines: [],
  AddDiscipline: function (discipline) {
    if (this.disciplines.indexOf(discipline) < 0) {
      this.disciplines.push(discipline);
      return true;
    }
    return false;
  },
  RemoveDiscipline: function (discipline) {
    if (this.disciplines.indexOf(discipline) >= 0) {
      this.disciplines.splice(this.disciplines.indexOf(discipline), 1);
      return true;
    }
    return false;
  },
  Print: function () {
    return "Name: " + this.name + " Age: " + this.age + " Disciplines: " + this.disciplines;
  }
}

Teacher.__proto__ = Person;
Student.__proto__ = Person;