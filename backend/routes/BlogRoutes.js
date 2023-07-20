const express = require("express");
const multer = require('multer');
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const { getBlog, addBlog, deleteBlog, editBlog, Blog_search } = require("../controllers/BlogController");
const paginatedResults = require('../pagination/paginatedResults');
const Blog = require("../models/BlogModel");

const router = express.Router();

// Image upload function

var uniqueId = uuidv4();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); 
  },
  filename: function (req, file, cb) {
    cb(null, uniqueId + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// Fetch all Blog with paginatedResults
router.get('/', paginatedResults(Blog), getBlog);

// Post new Blog data
router.post('/add', upload.single("image"), addBlog);

// Search for Blogs
router.get("/search", Blog_search);

// Delete a particular Blog's data
router.delete('/:id', deleteBlog);

// Update a particular Blog's data
router.put('/edit', upload.single("image"), editBlog);

module.exports = router;