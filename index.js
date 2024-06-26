// NOTE: You must insert your API key on Line 15 for this script to work as intended
// Get a free API Key here: https://exchangeratesapi.io/

import fs from 'node:fs/promises';

// Global variables ------------------------------------------------------

let employees = [];
let currencyData;

 


// Validator functions ---------------------------------------------------

const isCurrencyCodeValid = function (code) {
  const currencyCodes = Object.keys(currencyData.rates);
  return (currencyCodes.indexOf(code) > -1);
}

const isStringInputValid = (input) => {
  return (input) ? true : false;
}

const isBooleanInputValid = function (input) {
  return (input === "yes" || input === "no");
}

const isIntegerValid = (min, max) => {
  return (input) => {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < min || numValue > max) {
      return false;
    }
    return true;
  }
}

// Application commands --------------------------------------------------

function listEmployees() {
  console.log(`Employee List ----------------------------`);
  console.log('');

  employees.forEach(e => {
    logEmployee(e);
    prompt('Press enter to continue...');
  });
  console.log(`Employee list completed`);
}

async function addEmployee() {
  console.log(`Add Employee -----------------------------`);
  console.log('');
  let employee = {};
  employee.id = getNextEmployeeID();
  employee.firstName = getInput("First Name: ", isStringInputValid);
  employee.lastName = getInput("Last Name: ", isStringInputValid);
  let startDateYear = getInput("Employee Start Year (1990-2023): ", isIntegerValid(1990, 2023));
  let startDateMonth = getInput("Employee Start Date Month (1-12): ", isIntegerValid(1, 12));
  let startDateDay = getInput("Employee Start Date Day (1-31): ", isIntegerValid(1, 31));
  employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
  employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => (i === "yes"));
  employee.salaryUSD = getInput("Annual salary in USD: ", isIntegerValid(10000, 1000000));
  employee.localCurrency = getInput("Local currency (3 letter code): ", isCurrencyCodeValid);

  employees.push(employee);
  await writeData();
}

// Search for employees by id
function searchById() {
  const id = getInput("Employee ID: ", null, Number);
  const result = employees.find(e => e.id === id);
  if (result) {
    console.log("");
    logEmployee(result);
  } else {
    console.log("No results...");
  }
}

// Search for employees by name
function searchByName() {
  const firstNameSearch = getInput("First Name: ").toLowerCase();
  const lastNameSearch = getInput("Last Name: ").toLowerCase();
  const results = employees.filter(e => {
    if (firstNameSearch && !e.firstName.toLowerCase().includes(firstNameSearch)) {
      return false;
    }
    if (lastNameSearch && !e.lastName.toLowerCase().includes(lastNameSearch)) {
      return false;
    }
    return true;
  });
  results.forEach((e, idx) => {
    console.log("");
    console.log(`Search Result ${idx + 1} -------------------------------------`);
    logEmployee(e);
  });
}

// Application execution -------------------------------------------------

const main = async () => {
  // Get the command the user wants to exexcute
  const command = process.argv[2].toLowerCase();

  switch (command) {

    case 'list':
      listEmployees();
      break;

    case 'add':
      await addEmployee();
      break;

    case 'search-by-id':
      searchById();
      break;

    case 'search-by-name':
      searchByName();
      break;

    default:
      console.log('Unsupported command. Exiting...');
      process.exit(1);

  }

}

Promise.all([ loadData(), getCurrencyConversionData() ])
  .then(main)
  .catch((err) => {
    console.error("Cannot complete startup.");
    throw err;
  });



  import chalk from 'chalk';
  import { logObject, numEmployeesLogged } from './logging.js';
  
  // console.log(`${chalk.blue.bold('First Name: ')} David`);
  // console.log(`${chalk.green.bold('Last Name: ')} Tucker`);
  
  const employee = {
    id: 0,
    email: "lauren_shaffer@globomantics.com",
    firstName: "Lauren",
    lastName: "Shaffer",
    salaryUSD: 246463,
    localCurrency: "PEN",
    dateBirth: "1988-02-08",
    startDate: "2006-02-14",
    isActive: true
  };
  
  logObject(employee);
  logObject(employee);
  console.log(`${chalk.red('Employees Logged: ')} ${chalk.gray.bold(numEmployeesLogged)}`);
  
