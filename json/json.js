let employee = {
    firstname: "David",
    lastName: "Tucker",
    birthdate: new Date ("January 1, 1982"),
    numYearsEmployment: 7,
    department: "Engineering",
    title: "CTO",
    isActive: true,
    salary: 100000
};

let jsonValue = JSON.stringify (employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue)


let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);



let jsonString = `{
"firstName": "Eliszabeth",
"lastName": "Jones"
}`
let obj = JSON.parse(jsonString);
console.log(jsonString)


let notJson = "Hello!";
let newObj = JSON.parse(notJSON);
console.log (notJSON)
