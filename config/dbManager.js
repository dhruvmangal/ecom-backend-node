const child_process = require('child_process');
const process = require('process');

const generateModel = require('../helper_functions/generateModel');
const createTables = require('../helper_functions/createTables');
const seeder = require('../helper_functions/seeder');
const userAttributes = require('../constants/UserAttributes.json');


console.log(process.argv)
// console.log(userAttributes)
if (process.argv[2] === "generate_model") {
    const data = child_process.execSync(generateModel("user",userAttributes))
    console.log("data",data.toString())
} 
else if (process.argv[2] === "generate_tables") {
    const data = child_process.execSync(createTables())
    console.log("data",data.toString())
} 
else if (process.argv[2] === "insert_seeds") {
    const data = child_process.execSync(seeder("demo-user"))
    console.log("data",data.toString())
}
else {
    Error("Valid argument is required!")
}
// process.execSync()