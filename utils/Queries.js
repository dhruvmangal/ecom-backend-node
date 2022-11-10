const con = require("../connections/mysql.conn")

function insertAll ({table, values}) {
    if ( table && values ){
        con.query(`INSERT INTO ${table} (${this.toString()}) VALUES (${values.toString()}) ;`,(err,res)=>{
            if(err)
                return new Error(err)
            return res
        })
    }
    return new Error(`${ !table ? "Table name" : !values && !table ? "and values" : "Values" } missing`)
}

function insert ({table, columns, values}) {
    if ( table && values ){
        con.query(`INSERT INTO ${table} (${columns.toString()}) VALUES (${values.toString()}) ;`,(err,res)=>{
            if(err)
                return new Error(err)
            return res
        })
    }
    return new Error(`${ !table ? "Table's name is" : !values ? "Values are" : "Columns are" } missing`)
}

function select ({fields="*", table, condition, distinct }) {
    if ( table ){
        con.query(`SELECT ${ distinct && "DISTINCT" } ${fields.toString()} FROM ${table} ${condition && ("WHERE " + condition)} ;`,(err,res)=>{
            if(err)
                return new Error(err)
            return res
        })
    }
    return new Error(`Table's name is missing`)
}

function update ({ table, values, condition }) {
    if ( table ){
        con.query(`UPDATE ${table} SET ${Object.entries(values).map( item => item[0]+ " = " + item[1] ).toString()} ${condition && ("WHERE " + condition)} ;`,(err,res)=>{
            if(err)
                return new Error(err)
            return res
        })
    }
    return new Error(`Table's name is missing`)
}

module.exports = {
    insertAll,
    insert,
    select,
    update,
}