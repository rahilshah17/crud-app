const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ras', 
{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("Database connected")})
.catch((e) => {console.log("Database not connected:" + e)});