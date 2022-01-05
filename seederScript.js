require('dotenv').config();

const productsData=require('./data/products')
const connectDB=require('./config/db')
const Product=require('./models/Product');


connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({
            
        })
        await Product.insertMany(
            productsData
        )

        console.log('Data Import Success')
        process.exit();
    } catch (error) {
        console.error('Data Import Error')
        process.exit(1);
    }
}

importData()
//mỗi lần update data nên chạy npm run data:import để chạy file seeder.js
//data đc up lên database qua bước này r đc lấy về sử dụng ở file server.js