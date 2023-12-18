let obj1 = {}

let obj2 = new Object();

obj1.firstName = "Davud";
obj1.LastName = "Tucker";
obj1.isActive = true;
obj1.startDate = new Date("January 1, 2022");
obj.vacationDays = 14;
console.log(obj1);


let obj3 = {
    firstName: "David",
    lastName: "Tucker",
    isActive: true,
    startdate: new date ("January 1, 2022"),
    vacationDays: 14
};
console.log(obj3);

console.log(`First Name: ${obj3.firstName}`);
console.log(`Last Name: ${obj3["lastName"]}`);



delete obj3.firstName
console.log(obj3);



console.log(`Non-existent value; ${obj3.middleName}`);



let obj4=obj3;
 obj4.lastName ="Smith";
 console.log(`Last Name (obj3) : ${obj3.lastName}`);