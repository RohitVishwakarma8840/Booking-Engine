const express = require('express');
const db = require('../db/db');





// const getAllEvents = async ((req,res) => {
   
// });

const getAllEvents = async (req,res) => {
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
}


module.exports = {
    getAllEvents
}