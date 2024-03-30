let employee = {
    firstName: "David",
    lastnaame: "Tucker",
    startDate: new Date(2016, 1, 3),
    numYearsService: 7,
    isActive: true,
    department: "Engineering",
    title: "VPdepartment Engineering"
};


switch (employee.departemnt) {
    case 'Engineering':
        console.log('Meet in Building 1');
        break;


        case 'Marketing':
            console.log('Meet in Building 2');
            break;

            case 'HR':
                console.log('Meet in Building 1')
break;
default:
    console.log('Meet in Building 3')
}


switch (employee.department) {
    case 'Engineering':
        case 'HR':
            console.log('Meet in Building 1');
            break;

            case 'Marketing':
                console.log('Meet in building 2');
                break;

                deafult:
                console.log('Meet in Building 3');
}



