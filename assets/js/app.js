// Referall
const selectID = (elem) => {
  return document.getElementById(elem);
};

const ID = selectID("id");
const firstName = selectID("f-name");
const lastName = selectID("l-name");
const courseName = selectID("c-name");
const obtainMarks = selectID("marks");
const submitBtn = selectID("submit-btn");
const showResult = selectID("show-result");

const resultShow = document.querySelector(".results");

let userData = [
//   {
//     ID: "21",
//     firstName: "Tusar",
//     lastName: "Ali",
//     courseName: "AD12",
//     obtainMarks: "80",
//   },
//   {
//     ID: "22",
//     firstName: "Salman",
//     lastName: "Mahmud",
//     courseName: "AD15",
//     obtainMarks: "90",
//   },
];

const getData = (e) => {
  e.preventDefault();
  const idVal = ID.value;
  const fName = firstName.value;
  const lName = lastName.value;
  const cName = courseName.value;
  const obMarks = obtainMarks.value;

  const person = {
    ID: idVal,
    firstName: fName,
    lastName: lName,
    courseName: cName,
    obtainMarks: obMarks,
  };

  userData.push(person);
  console.log(userData);

  let div = document.createElement("div");
  div.className = "result-item";
  div.innerHTML = `
    <div class="result-body">
    <h2>ID</h2>
    <p>${idVal}</p>
    </div>
    <div class="result-body">
        <h2>First Name</h2>
        <p>${fName}</p>
    </div>
    <div class="result-body">
        <h2>Last Name</h2>
        <p>${lName}</p>
    </div>
    <div class="result-body">
        <h2>Course Name</h2>
        <p>${cName}</p>
    </div>
    <div class="result-body">
        <h2>Obtain Mark</h2>
        <p>${obMarks}</p>
    </div>
    `;

    resultShow.append(div);
};

submitBtn.addEventListener("click", getData);

// userData.forEach((e) => {
//   let div = document.createElement("div");
//   div.className = "result-item";
//   div.innerHTML = `
//     <div class="result-body">
//     <h2>ID</h2>
//     <p>${e.ID}</p>
//     </div>
//     <div class="result-body">
//         <h2>First Name</h2>
//         <p>${e.firstName}</p>
//     </div>
//     <div class="result-body">
//         <h2>Last Name</h2>
//         <p>${e.lastName}</p>
//     </div>
//     <div class="result-body">
//         <h2>Course Name</h2>
//         <p>${e.courseName}</p>
//     </div>
//     <div class="result-body">
//         <h2>Obtain Mark</h2>
//         <p>${e.obtainMarks}</p>
//     </div>
//     `;

//     resultShow.append(div);
// });

// for (const e of userData) {
//     let div = document.createElement("div");
//   div.className = "result-item";
//   div.innerHTML = `
//     <div class="result-body">
//     <h2>ID</h2>
//     <p>${e.ID}</p>
//     </div>
//     <div class="result-body">
//         <h2>First Name</h2>
//         <p>${e.firstName}</p>
//     </div>
//     <div class="result-body">
//         <h2>Last Name</h2>
//         <p>${e.lastName}</p>
//     </div>
//     <div class="result-body">
//         <h2>Course Name</h2>
//         <p>${e.courseName}</p>
//     </div>
//     <div class="result-body">
//         <h2>Obtain Mark</h2>
//         <p>${e.obtainMarks}</p>
//     </div>
//     `;

//     resultShow.append(div);
// }