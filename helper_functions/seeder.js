module.exports = function(name) {
    if(name){
        return `npx sequelize-cli seed:generate --name ${name}`
    }
    else{
        Error("name attribute is required")
    }
}