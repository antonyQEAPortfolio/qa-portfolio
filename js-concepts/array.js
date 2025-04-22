// Define Array
let student = ["Antony","Sagaya","Raj","Sara","Niralya"]

//Access elements by index
console.log(student[0]) ; // output Antony
console.log(student[2]) ; // output Raj

// Add a element to end of the array
student.push ("Cinthiya");
console.log(student); // Output : ["Antony","Sagaya","Raj","Sara","Niralya", "Cinthiya"]

// Remove the last element of the array
let studentDelete = student.pop();
console.log(studentDelete); // Cinthiya
console.log(student) // Output : ["Antony","Sagaya","Raj","Sara","Niralya"]

// Add a element to the begining of the array
student.unshift("Leo")
console.log(student); // Output : ["Leo","Antony","Sagaya","Raj","Sara","Niralya"]

//Remove the first elemnt from the array
let studentUpdate = student.shift()
console.log(studentUpdate); // Output : Leo
console.log(student); // Output : ["Antony","Sagaya","Raj","Sara","Niralya"]

// Find the element by index
let studentIndex = student.indexOf("Raj");
console.log(studentIndex); //Output : 2

// Remove a element by index
let indexDelete = student.splice(0,2)
console.log (indexDelete); //Output : [ 'Antony', 'Sagaya' ]
console.log(student); // Output : [ 'Raj', 'Sara', 'Niralya' ]
student.push("Anto","Cinthiya","Leo")
console.log(student); // ouput: [ 'Raj', 'Sara', 'Niralya', 'Anto', 'Cinthiya', 'Leo' ]
let indexDelete1 = student.splice(1,2)
console.log (indexDelete1); //Output : [ 'Sara', 'Niralya' ]
console.log(student); // Output : [ 'Raj', 'Anto', 'Cinthiya', 'Leo' ]
let indexDelete2 = student.splice(2,1)
console.log (indexDelete2); //Output : [ 'Cinthiya' ]
console.log(student); // Output : [ 'Raj', 'Anto', 'Leo' ]

// Iterate over the array and find the index

student.push("bala","kamesh","Sharma","Suresh");

//Using forEach
student.forEach( (value , index) => {
    console.log(`Index : ${index} , Value: ${value}`);
});

// using forloop
for(i=0; i<student.length; i++){
    console.log(`Index: ${i}, Value: ${student[i]}`)
}