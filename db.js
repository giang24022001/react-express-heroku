require('dotenv').config();
const mongoose=require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    });
        console.log('MongoDB Connected suscessfully')
}
    catch (err){
        console.log('MongoDB Connect failure !!!');
        process.exit(1);
    }
}

module.exports = connectDB;
//trang dùng mongoose kết nối với mongodb