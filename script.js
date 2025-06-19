let students = [
  { name: "sibga", roll: 1, marks: 75 },
  { name: "muskan", roll: 2, marks: 65 },
  { name: "shifa", roll: 3, marks: 80 }
];

function showStudents(data) {
  let output = "";
  for (let i = 0; i < data.length; i++) {
    output += `<p>Name: ${data[i].name}, Roll: ${data[i].roll}, Marks: ${data[i].marks}</p>`;
  }
  document.getElementById("studentList").innerHTML = output;
}

showStudents(students);

function showTopScorers() {
  let top = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks > 70) {
      top.push(students[i]);
    }
  }
  showStudents(top);
}

function addStudent() {
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let marks = document.getElementById("marks").value;

  if (name && roll && marks) {
    let newStudent = {
      name: name,
      roll: parseInt(roll),
      marks: parseInt(marks)
    };
    students.push(newStudent);
    showStudents(students);
    
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("marks").value = "";
  }
}