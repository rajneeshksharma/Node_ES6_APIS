import express from'express';
import logger from'morgan';

const app = express();
const PORT = 8000;

app.use(logger('dev'));

app.get('/',(req,res)=>{ 
     res.json({ msg: "Welcome to Node Es6 Project TO use Api"});
 });
 app.use((req, res, next) => {
    const error = new Error('Not found');
    error.message = 'Invalid route';
    error.status = 404;
    next(error);
  });
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
  });