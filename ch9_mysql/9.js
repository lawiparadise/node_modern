var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'Company'
});

// client.query('USE Company');
client.query('SELECT * FROM products', function (error, result, fields) {
    if(error){
        console.log('에러발생');
    } else{
        console.log(result);
    }
});