let students = [
  {
    name: "Julia",
    p1: 8,
    p2: 6,
  },
  {
    name: "Diego",
    p1: 3,
    p2: 5,
  },
  {
    name: "Pedro",
    p1: 10,
    p2: 9.5,
  },
  {
    name: "Antonio",
    p1: 7,
    p2: 6,
  },
]

function averageGrades(p1, p2) {
  return (p1 + p2) / 2
}

function averageStudent(student) { 
  if (averageGrades(student.p1, student.p2) >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} foi: ${averageGrades(student.p1, student.p2)}. \nParabéns ${student.name}, você foi aprovado(a) no concurso!`)
  } 
  
  else {
    alert(`A média do(a) aluno(a) ${student.name} foi: ${averageGrades(student.p1, student.p2)}. \nNão foi dessa vez, ${student.name}. Tente novamente!`)
  }  
}

for (let studentArray of students) {
  averageStudent(studentArray)  
}