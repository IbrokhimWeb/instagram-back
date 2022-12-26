const mongoose=require('mongoose')
exports.connectToDB = async () => {
    mongoose.connect("mongodb+srv://ibo:1234@azaza.endngxs.mongodb.net/?retryWrites=true&w=majority").then((connection)=>{
        console.log("DB connected : "+ connection.connection.host);
    }).catch(err=>{
        console.log(err);
    })
};
