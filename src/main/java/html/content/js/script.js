// To web page
//alert("Hello, Boriss!");

// To web page console
let fullName = 'Boriss Harin';
console.log("I'm JS developer");
console.log(fullName);
console.log(fullName.length);

const ZIPCODE = 11312;
console.log(ZIPCODE);

//Comparison
let a = '5';
let b = 5;

if(b == a) {
    console.log('values are equal');
} else {
    console.log('values and/or types are not equal')
}

if(a === b) {
    console.log('values are equal');
} else {
    console.log('values and/or types are not equal')
}
console.log(a + b);

let arrayFruit = ["Apple", "Orange", "Mango"];
console.log(arrayFruit);
console.log(arrayFruit.length);

arrayFruit.pop();
console.log(arrayFruit);

arrayFruit.push('Kiwi');
console.log(arrayFruit);

//JSON - JavaScript Object Notation
let student = {
    "name" : "Boriss",
    "age" : 43,
    "joinDate" : "2022-12-8",
    "active" : true,
    "grade" : 4.34,
    "address" : {
        "street" : "Tedre",
        "city" : "Tallinn",
        "zipCode" : 11315
    }
}
console.log(student);
console.log(student.address.zipCode);
console.log(Object.keys(student));

//JSON array
let students = [
    {
        "name" : "Boriss",
        "age" : 43,
        "joinDate" : "2022-12-8",
        "active" : true,
        "grade" : 4.34,
        "address" : {
            "street" : "Tedre",
            "city" : "Tallinn",
            "zipCode" : 11315
        }
    },
    {
        "name" : "Dasha",
        "age" : 28,
        "joinDate" : "2022-12-8",
        "active" : true,
        "grade" : 4.99,
        "address" : {
            "street" : "Tedre",
            "city" : "Tallinn",
            "zipCode" : 11315
        }
    }
]
console.log(students);
console.log(students[1].grade);

//FUNCTION
function isStudentPassed(student) {
    return student.grade > 3.5;
}
console.log(isStudentPassed(student));

//Accessing HTML
// let linkList = document.getElementById("links");
// console.log(linkList)
// linkList.innerHTML = "Removed";

let trTag = document.getElementsByTagName("tr");
console.log(trTag);

//Events
function showMeAlert() {
    alert("This link has been clicked!");
}
function secondAlert() {
    alert("Another alert has been triggered!");
}

//Arrow function
//Like anonymous class
let isStudentPassed2 = function (student) {
    return student.grade > 3.5;
}
console.log(isStudentPassed2())
//Like lambda
let isStudentPassed3 = (student) => { return student.grade > 3.5};
console.log(isStudentPassed3())