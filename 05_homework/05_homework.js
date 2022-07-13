const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


/*let maleStudents = [];чоловік
let femaleStudents = [];жінка 
*/

let memStudents = [];
let womenStudents = [];


function boyAndGirl() {
    memStudents.push(students[0], students[1], students[4]);
    womenStudents.push(students[2], students[3], students[5]);
    return;
}
boyAndGirl();


let pairsStudents = [];

function pairStudents() {
    for(let i = 0 ; i < memStudents.length; i++) {
        pairsStudents.push([memStudents[i], womenStudents[i]]);

    }
    return;
}
pairStudents();

console.log(pairsStudents);

let namesProject = [];

function nameProject() {
    for(let i = 0; i < pairsStudents.length; i++) {
        namesProject.push([memStudents[i] + ' i ' + womenStudents[i], themes[i] ]) ;

    }
    return;
}
nameProject();
console.log(namesProject);

let marksStudents= []; 

function markStudents() {
    for(let i = 0; i < students.length; i++) {
        marksStudents.push([students[i], marks[i]]);
    }
    return marksStudents;

}
console.log(markStudents());

let pairsMarks = [];
function pairMarks() {
    for (let i = 0; i < 3; i++) {
        pairsMarks.push([memStudents[i] + ' i ' + womenStudents[i], themes[i] , (Math.floor(Math.random() * 4 + 2))])
    }
    return;
}
pairMarks();
console.log(pairsMarks);