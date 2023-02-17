const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.set("port", process.env.PORT || 8000);
app.use(express.json());

let corsOption = {
    origin: 'http://localhost:3306'
};
app.use(cors(corsOption));

const userRouter = require('./routes/userRoute');
const productsRouter = require('./routes/productRoute');
// const loginRouter = require('./routes/loginRoute');
// const registerRouter = require('./routes/registerRoute');

app.use('/users', userRouter);
app.use('/products', productsRouter);
// app.use('/login', loginRouter);
// app.use('/register', registerRouter);

app.get('/', (req, res) =>{
    res.json({ message: "Welcome To The Store!!!"});
});

app.listen(app.get("port"), () =>{
    console.log(`Listening For Calls On Port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});