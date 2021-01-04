import express, { urlencoded } from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import multer from 'multer';

import porfolioRoutes from './routes/portfolio.routes';

const app = express();

app.set('port', config.PORT);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//static
// app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/uploads', express.static(__dirname +'/uploads'));

//multer
const storage = multer.diskStorage({
    destination: path.join(__dirname,'/uploads'),
    filename(req, file, cb) {
      cb(null, new Date().getTime() + path.extname(file.originalname));
    }
  });

app.use(multer({storage}).single('image')); //imput de tipo file parametro image

//routes
app.use(porfolioRoutes);

export default app;