const mongoose=require('mongoose')
exports.connectToDB = async () => {
    mongoose.connect("mongodb+srv://IbrokhimWeb:Ibroxim7845@instagram-backend.r2dgybc.mongodb.net/?retryWrites=true&w=majority").then((connection)=>{
        console.log("DB connected : "+ connection.connection.host);
    }).catch(err=>{
        console.log(err);
    })
};
