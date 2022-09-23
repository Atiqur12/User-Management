const mysql = require("mysql");
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'user_management',
    port: 3306,
    password: ''

})

con.connect((error) => {
    if (!error)
        console.log("connected");
    else
        console.log("error")

}


)