require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const connection = require('./db');
const userRoute = require('./routes/userRoute');
const crudRoutes = require('./routes/articleRoutes');
const BlogRoutes = require('./routes/BlogRoutes');
const StatistiqueRouter = require('./routes/Statistique');
const nodemailer = require('nodemailer');

// Configure dotenv files above using any other library and files
const PORT = process.env.PORT || 8000;
// Creating an app from express
const app = express();

// Database connection
connection();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Routes
const categoryRoute = require('./routes/category');
const contactRoute = require('./routes/contact');
const commentairesRoute = require('./routes/commentaires');
const replyRoute = require('./routes/reply');
const annonceobjetRoute = require('./routes/annonceobjet');
const annonceonurritureRoute = require('./routes/annonceonurriture');
const messageRoute = require('./routes/message');
const statistiqueRoute = require('./routes/statistique');
app.use('/category', categoryRoute);
app.use('/contact', contactRoute);
app.use('/commentaires', commentairesRoute);
app.use('/reply', replyRoute);
app.use('/annonceobjet', annonceobjetRoute);
app.use('/annonceonurritureobjet', annonceonurritureRoute);
app.use('/message', messageRoute);


// Email function
function sendEmail() {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hamelchanel10@gmail.com',
        pass: 'fejtefyrhywmcukg',
      },
    });
    const mailConfigs = {
      from: 'hamelchanel10@gmail.com',
      to: 'hamelchanel10@gmail.com',
      subject: 'Nouveau objet ajouté',
      text: 'Bonjour, un nouveau objet a été ajouté',
    };
    transporter.sendMail(mailConfigs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: 'An error has occurred' });
      }
      return resolve({ message: 'Email sent successfully' });
    });
  });
}

// Route for sending email
app.get('/', (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// Route for verifying role
app.get('/verify-role', (req, res) => {
  verifyRole()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// Using routes
app.use('/api', userRoute);
app.use('/api/cruds', crudRoutes);
app.use('/api/Blog', BlogRoutes);
app.use('/api/statistiques', statistiqueRoute);
// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));