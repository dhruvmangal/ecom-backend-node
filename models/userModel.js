const {
    insertAll,
    insert,
    select,
    update,
} = require("../utils/Queries")

const userModel = [ "first_name", "last_name", "email", "passcode" ]



userModel.insertAll = insertAll
userModel.insert = insert
userModel.select = select
userModel.update = update

module.exports = userModel