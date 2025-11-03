// server.js (or db.js for connection details)

// Import the mysql2 library
const mysql = require('mysql2'); 

// Create a connection pool (recommended for Express apps)
const pool = mysql.createPool({
    host: 'localhost',         // Usually 'localhost' if running on the same machine as your server
    user: 'root',              // Your MySQL username (e.g., 'root')
    password: '', // Your MySQL password
    database: 'evjoints_db', // database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// To check the connection 
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Successfully connected to MySQL (via pool)!');
    connection.release(); // Release the connection back to the pool
});

// Export the pool so you can use it in your route files
module.exports = pool.promise(); 
// Use .promise() for async/await support