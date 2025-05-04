const mongoose=require('mongoose');
//mongodb connection 
const connectDatabase=()=>{
mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log('MongoDB Connected to host: '+con.connection.host);
    
})
};

module.exports=connectDatabase;
