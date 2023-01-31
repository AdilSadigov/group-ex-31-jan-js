function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let studentsArray = [
  {name: "Adil"},
  {name: "Karam"},
  {name: "Ali"},
  {name: "Hasan"},
  {name: "Adrian"}
]

console.log(students)

function join(students) {
  students.forEach(element => {
    element.academy = "Develhope"
  });
}

join(studentsArray)

// console.log(studentsArray)

function exam(students) {
  students.forEach((el) => {
    let random = getRandomNumber(1, 10);
    el.grade = random;
  })
}

exam(studentsArray)

// console.log(studentsArray)

function year(students) {
  for (let i = 0; i < students.length; i++) {
    let a = students[i]
    a.year = getRandomNumber(1, 3)
  }
}

year(studentsArray)

// console.log(studentsArray)

function graduate(students) {
  return students.filter ((el) => el.grade >= 6)
}

// console.log(graduate(studentsArray))

function studentLevels(students) {
  let result = []
  students.forEach((student) => {
    if (student.grade <= 5) {
      result.push("Failed")
    }
    else if (student.grade > 5 && student.grade < 7){
      result.push("Average")
    }
    else if (student.grade >=7 && student.grade < 9){
      result.push("Above Average")
    }
    else {
      result.push("Great")
    }
  })

  return result
}
// console.log(studentsArray)
// console.log(studentLevels(studentsArray))

function failedStudents(students) {
  return students.filter((student) => student.grade <= 5)
}

console.log(studentsArray)
console.log(failedStudents(studentsArray))