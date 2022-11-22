module.exports = function(bool=true) {
    return `npx sequelize-cli db:migrate${bool ? "" : ":undo"}` 
}