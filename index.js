const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const attendanceRoutes =require('./routes/checkRoutes');
const attendanceRoutesPending =require('./routes/checkPending');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
// app.use(cors({origin:'https://61e79dd6314ddb5fddcd6cbf--userattendens.netlify.app',}));
app.use(cors())

// api
app.use('/api/users', userRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/pending', attendanceRoutesPending);
app.use(notFound)

app.get('/', (req,res) =>{
    res.send('api is runing');
});
app.use(errorHandler)
const PORT = 5000;

app.listen(PORT, () => console.log(`server is runing on PORT ${PORT}`));

