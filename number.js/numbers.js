let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceiling: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

let fixed = num1.toFixed(3);
console.log(`Fixed Typed: ${typeof(fixed)} Fixed Value: ${fixed}`);


let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString('en-Us')}`);
console.log(`Greece: ${num2.toLocaleString('el-El')}`);
console.log(`Bangladesh: ${num2.toLocaleString(`bg-bg`)}`);
console.log(`Punjab: ${num2.toLocaleString('pa-PA')}`);

let formatter1 = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

let Salary = 10000;
let monthlySalary = Salary / 12;
console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`);
console.log(`US Dollars: ${formatter1.format(monthlySalary)}`);


console.log(`Us Dollars: ${formatter1.format(monthlySalary)}`);

let formatter2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR'}) 
console.log(`Euros: ${formatter2.format(monthlySalary)}`);

let formatter3= new Intl.NumberFormat('ja-JA', { style: 'currency', currency: 'JPY'})
console.log(`Yen: ${formatter3.format(monthlySalary)}`)


let formatter4= new Intl.NumberFormat('zh-HK', { style: 'currency', currency: 'HKD'})
console.log(`Hong Kong Dollars: ${formatter4.format(monthlySalary)}`);





