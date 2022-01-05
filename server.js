require("dotenv").config();
const express=require('express');
const connectDB=require('./config/db');
const productRoutes=require('./routes/productRoutes');
const path = require('path');
connectDB();

const app = express();

app.use(express.json());
app.use('/api/products',productRoutes)
//app.use hàm này sẽ đc chạy mỗi khi có 1 lệnh get hay set đến /api/products
//được viết ở bước bắt đầu xây dựng tuyến đường
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//Lệnh git init được sử dưng để tạo, khởi tạo một kho chứa Git mới (Git Repo) ở local. Khi đang trong thư mục dự án chạy lệnh git init nó sẽ tạo ra một thư mục con (ẩn) tên .git, 
//thư mục này chứa tất cả thông tin mô tả cho kho chứa dự án (Repo) mới - những thông tin này gọi là metadata gồm các thư mục như objects, refs ... 
//Có một file tên HEAD cũng được tạo ra - nó trỏ đến commit hiện tại.
//hiểu đơn giản file .env :
//File .env (vâng. File .env, không có tên file, chỉ có file extension). Đặt ở trong thư mục gốc của app.
//NPM package tên là dotenv, cài thông qua npm install dotenv --save. Sau đó thêm dòng require('dotenv').config(); vào ngay đầu file app.js (hoặc file nào là khởi nguồn của app của bạn).
//`DB_LOCALHOST="mongodb://localhost:27017/fcc-backend-shortenURL"`
//`mLab_URL="mongodb://kippa:kippa696969@ds229878.mlab.com:29878/fcchanoi"`
//còn trong app.js, ngay phía mấy dòng đầu khai báo import, đặt tiếp:
//const dbURL = process.env.DB_LOCALHOST ||  process.env.mLab_URL ;
//Với việc sử dụng .env, ta bắn 1 mũi tên mà trúng 2 đích:

//Giấu các thông tin bí mật (username, password) trong file .env, không được commit thông qua git thông thường.
//Tận dụng để chuyển qua lại giữa các môi trường ứng với mục đích sử dụng khác nhau.
//Các bước setup backend:
// npm init -y , sau đó tại package.json sửa main: thành 1 file gốc dẫn, ở đây là file server.js
//tạo ra 2 file lớn là backend và frontend 
//npm i express moongose dotenv
//npm i --save-dev nodemon concurrently
//tại front end npx create-react-app .
//tạo file .env và 1 file .gitignore,copy .gitignore từ frontend ra ngoài cùng
//tại frontend 
//rm -rf .git
//ls -a
//có thể xóa file .gitignore từ frontend
//tạo 1 local git
//cd.. git init
//config/db.js là file kết nối với mongodb thông qua mongoose
//data/products.js là file chứa data
//models/Product.js là file định dạng cho file chứa data ở trên
//seederScript là file xử lí dữ liệu với data
//------
//Bước tiếp theo sẽ tạo ra các routes