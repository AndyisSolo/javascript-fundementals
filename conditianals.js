let employee = {
    firstName: "David",
    lastName: "Tucker",
    startDate: new Date(2016, 1, 3),
    numYearsService: 7,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering",
};

let badgeColor;

if (employee.numYearsService < 5) {
    employee.badgeColor = "blue";
} else if (employee.numYearsService < 10) {
    employee.badgeColor = "yellow";
} else if (employee.numYearsService < 15) {
    employee.badgeColor = "red";
} else if (employee.numYearsService < 20) {
    employee.badgeColor = "purple";
} else {
    employee.badgeColor = "silver";
}
console.log(`years: ${employee.numYearsService} Badge Color: ${employee.badgeColor}`);




if(employee.numyearsServic < 5 && employee.department === "Engineering") {
    console.log(`Employee meets criteria`);
}


if(employee.numYearsService < 10 || employee.title.startsWith("VP")) {
    console.log(`Employee meets criteria`);
}


if(employee.numYearsService < 10 && !employee.isActive) {
    console.log(`Employee is retired with full retirment benefit`);
}


if(employee.numYearsServiceService > 10) {
    employee.annualBonus = 1000;
} else {
    employee.annualBonus = 500;
}

employee.annualBonus = (employee.numYearsService > 10) ? 1000 : 500;
