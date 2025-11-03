const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./db/db');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// app.get('/test-db-connection', async (req, res) => {
//     try {
//         const [rows] = await db.query('SELECT NOW() AS currentTime');   
//         res.json({ success: true, currentTime: rows[0].currentTime });
//     } catch (error) {       
//         console.error('Database connection test failed:', error);
//         res.status(500).json({ success: false, message: 'Database connection failed', error: error.message });
//     } 
// });

app.get('/users', async(req,res)=>{
    try{

        const users = await db.query('SELECT * FROM users');
        // for(let user of user){
        //     // res.send(user);
        //     res.json({user, status:'200'});
        // }
        res.json({users, status:'200'});
    }
    catch(err){
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error', status:'500' });
    }
})

app.get('/events', async(req,res)=>{
    try{
        const [events] = await db.query('SELECT * FROM speakers');
        // for(let event of events){
        //     res.json({event, status:'200'});
        // }   

        res.json({events:events, status:'200'});

    }
    catch(err){
        console.log('Error fetching events:', err);
        res.status(500).json({ error: 'Internal Server Error', status:'500' });
    }
});

app.get('/', (req, res) => {
    // res.send('Hello, World!');
res.send("<p>Welcome to the Express server.</p>");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

