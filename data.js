import fs from 'node:fs/promises';
 
// Loading and writing data to the filesystem ----------------------------

const loadData = async () => {
    console.log("Loading employees.....");
    try {
      const fileData = await fs.readFile('./data.json');
return JSON.parse(fileData);
    } catch (err) {
      console.error("Cannot load in employees");
      throw err;
    }
  }
  
  const writeData = async (employees) => {
    console.log("Writing employees.....");
    try {
      await fs.writeFile('./data.json', JSON.stringify(employees, null, 2));
    } catch (err) {
      console.error("Cannot write employees data.");
      throw err;
    }
  }
  
  import createPrompt from 'prompt-sync';
  let prompt = createPrompt();
  
  const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry => {
      if(entry[0] !== "salaryUSD" || entry[0] !== "localCurrency") {
        console.log(`${entry[0]}: ${entry[1]}`);
      }
    });
    console.log(`Salary USD: ${getSalary(employee.salaryUSD, "USD")}`);
    console.log(`Local Salary: ${getSalary(employee.salaryUSD, employee.localCurrency)}`);
  }
  
  function getInput(promptText, validator, transformer) {
    let value = prompt(promptText);
    if (validator && !validator(value)) {
      console.error(`--Invalid input`);
      return getInput(promptText, validator, transformer);
    }
    if (transformer) {
      return transformer(value);
    }
    return value;
  }
  
  const getNextEmployeeID = () => {
    const maxID = Math.max(...employees.map(e => e.id));
    return maxID + 1;
  }