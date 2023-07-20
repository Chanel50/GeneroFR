const express = require("express");
const multer = require('multer');
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const { getCrud, addCrud, deleteCrud, editCrud, crud_search, countCrud } = require("../controllers/articleController");
const paginatedResults = require('../pagination/paginatedResults');
const Crud = require("../models/articleModel");

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

// Fetch all Crud with paginatedResults
router.get('/', paginatedResults(Crud), getCrud);

// Post new Crud data
router.post('/add', upload.single("image"), addCrud);

// Search for Cruds
router.get("/search", crud_search);


// Count the number of Cruds
router.get("/count", countCrud);


// Delete a particular Crud's data
router.delete('/:id', deleteCrud);

// Update a particular Crud's data
router.put('/edit', upload.single("image"), editCrud);

module.exports = router;