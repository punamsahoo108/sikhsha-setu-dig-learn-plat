const express  = require('express');
const app = express();
const port = 3001;
const cookieParser = require('cookie-parser');
const connectDb = require('./controllers/db');
const cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, 
}));


const signinRoute = require('./routes/signin');
const loginRoute = require('./routes/login');
const authmiddleware = require('./middlewares/auth');
const profileRoute = require('./routes/profile')
const qnaRoute = require('./routes/qna')
const contactRoute = require('./routes/contact')


app.use('/signin',signinRoute);
app.use('/login',loginRoute);
app.use('/profile',authmiddleware, profileRoute)
app.use('/qna', authmiddleware,qnaRoute)
app.use('/api/contact', contactRoute);

connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    })
}).catch((err)=>{
    console.error("Failed to connect db");
})