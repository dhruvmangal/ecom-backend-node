module.exports = function(name,attributes){
    if (name && attributes) {
        console.log(`npx sequelize-cli model:generate --name ${name} --attributes ${Object.keys(attributes).reduce((prev,curr)=> `${prev? prev+"," : "" }${curr}:${attributes[curr]}` ,"")}`);
        return `npx sequelize-cli model:generate --name ${name} --attributes ${Object.keys(attributes).reduce((prev,curr)=> `${prev? prev+"," : "" }${curr}:${attributes[curr]}` ,"")} --force`
    } else {
        Error("Please Provide Table name and attributes")
    }
}