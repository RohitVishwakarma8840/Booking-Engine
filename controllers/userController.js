const express = require('express');

const db  = require('../db/db');
const { get } = require('../routes/auth.route');


const getUser = async (req, res) => {

    try{

      const [users] = await db.query('SELECT * FROM users');
       
        res.json({users, status:'200'});

    }

    catch(err){
        console.log("Error fetching user:", err);
    }



};

  



module.exports = {
    getUser
}
