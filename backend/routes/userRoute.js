const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const isAuthenticated = require('../middleware/auth');

//Creating express router
const route = express.Router();
//Importing userModel
const userModel = require('../models/userModel');

//Creating register route
route.post("/register", async (req, res) => {
    try {
      const { name, email, password, telephone, date_de_naissance, genre} = req.body;
      //Check emptyness of the incoming data
      if (!name || !email || !password || !telephone || !date_de_naissance || !genre ) {
        return res.json({ message: 'Please enter all the details' });
      }
  
      //Check if the user already exists or not
      const userExist = await userModel.findOne({ email: req.body.email });
      if (userExist) {
        return res.json({ message: 'User already exists with the given emailId' });
      }
  
      //Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashPassword;
      const user = new userModel(req.body);
      await user.save();
  
      const users = await userModel.find({ email: { $ne: null, $ne: '' } });
      for (const user of users) {
        await sendEmail(user.email);
      }
  
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
      });
  
      return res.cookie("token", token).json({ success: true, message: 'User registered successfully', data: user, token });
    } catch (error) {
      return res.json({ error: error });
    }
  });

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "hamelchanel10@gmail.com",
                pass: "hssaxqtoihnsjvtx",
            },
        });
        const mail_configs = {
            from: "hamelchanel10@gmail.com",
            to: email,
            subject: 'Bienvenue sur GENERO',
            text: 'Bonjour, bienvenue sur notre application de dons des objets et des alliments '
        }
        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error)
                return reject({ message: 'an error has occured' })
            }
            return resolve({ message: "Email sent succesfuly" })
        })
    })
};

route.get('/user', async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || "Some error occurred while retrieving users",
      });
  }
});

// Helper function to generate a secure token
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

route.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.json({ message: 'Please enter all the details' });
    }

    // Check if the user exists
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res.json({ message: 'Wrong credentials' });
    }

    // Check password match
    const isPasswordMatched = await bcrypt.compare(password, userExist.password);
    if (!isPasswordMatched) {
      return res.json({ message: 'Wrong credentials' });
    }

    // Generate JWT token
    const tokenPayload = { id: userExist._id, role: userExist.roles };
    const token = generateToken(tokenPayload);

    // Set HttpOnly and secure flag for the cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true, // Use secure only in production with HTTPS
      maxAge: parseInt(process.env.JWT_EXPIRE) * 1000, // Convert to milliseconds
    });

    return res.json({
      success: true,
      message: 'LoggedIn Successfully',
      token: token,
      user: userExist,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Creating logout route
route.post('/logout', (req, res) => {
    // Clear the token cookie
    res.clearCookie('token');
    return res.json({ success: true, message: 'Logged out successfully' });
  });

//Creating user routes to fetch users data
route.get('/user', isAuthenticated, async (req, res) => {
    try {
        const user = await userModel.find();
        if (!user) {
            return res.json({ message: 'No user found' })
        }
        return res.json({ user: user })
    } catch (error) {
        return res.json({ error: error });
    }
})

route.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || "Some error occurred while deleting user",
      });
  }
});

// Edit user route
route.put('/user/update', async (req, res) => {
  const { name, email, password } = req.body;


  const {id} = req.params;

  try {
    // Find the user by ID
    const user = await userModel.findOne({email});
    if (!user) {
      return res.json({ message: 'User not found' });
    }

    // Update user data
    user.name = name 
    user.email = email

    if (password) {
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      user.password = hashPassword;
    }

    await user.save();

    return res.json({ success: true, message: 'User updated successfully', data: user });
  } catch (error) {
    return res.json({ error: error });
  }
});

// Creating rate route to rate a profile
route.post('/rate', isAuthenticated, async (req, res) => {
    try {
      const { userId, rating } = req.body;
      // Check if userId and rating are provided
      if (!userId || !rating) {
        return res.json({ message: 'Please provide user ID and rating' });
      }
  
      // Find the user by ID
      const user = await userModel.findById(userId);
      if (!user) {
        return res.json({ message: 'User not found' });
      }
  
      // Add the rating to the user's profile
      user.rating = rating;
      await user.save();
  
      return res.json({ success: true, message: 'Profile rated successfully' });
    } catch (error) {
      return res.json({ error: error });
    }
  });



module.exports = route;