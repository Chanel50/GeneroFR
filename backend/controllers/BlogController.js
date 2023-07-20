const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Blog = require("../models/BlogModel");
const userModel = require("../models/userModel");

const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving blogs");
  }
};

const addBlog = async (req, res) => {
  const id = uuidv4();
  const { titre, contenu } = req.body;
  const image = req.file.filename;
  const data = { id, titre, contenu, image };

  console.log(data);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send({ error: true, msg: errors.errors[0].msg });
  }

  try {
    const newBlog = new Blog(data);
    await newBlog.save();
    return res.status(200).json("Blog's Data Added Successfully");
  } catch (err) {
    console.error(err);
    return res.status(400).json("Error: " + err);
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Blog.findByIdAndDelete(id);
    if (result) {
      return res.json("Blog's Data Deleted Successfully");
    } else {
      return res.status(404).json("Blog not found");
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json("Error: " + err);
  }
};

const editBlog = async (req, res) => {
  const { _id, titre, contenu } = req.body;
  const image = req.file.path;
  const updatedData = { titre, contenu, image };

  try {
    const result = await Blog.findByIdAndUpdate(_id, updatedData);
    if (result) {
      return res.status(200).json("Updated Successfully");
    } else {
      return res.status(404).json("Blog not found");
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json("Error: " + err);
  }
};

const initializeBlogs = async () => {
  try {
    const count = await Blog.countDocuments().exec();
    if (count === 0) {
      await Blog.insertMany([]);
      console.log("Blog added successfully");
    }
  } catch (err) {
    console.error("Error initializing blogs:", err);
  }
};

const Blog_search = async (req, res) => {
  const { titre, contenu } = req.query;
  const searchCriteria = {};

  if (titre) {
    searchCriteria.titre = titre;
  }
  
  if (contenu) {
    searchCriteria.contenu = { $regex: new RegExp(contenu, 'i') };
  }

  try {
    const blogs = await Blog.find(searchCriteria);
    res.send(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error searching for blogs");
  }
};

module.exports = { getBlog, addBlog, deleteBlog, editBlog, Blog_search, initializeBlogs };
