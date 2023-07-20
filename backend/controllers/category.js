const categoryModel = require('../models/category');

// Create and Save a new category
exports.create = async (req, res) => {
    const { name, description } = req.body;
    
    if (!name) {
        res.status(400).send({ message: "Category name can not be empty!" });
        return;
    }
    
    const category = new categoryModel({
        name,
        description
    });
    
    try {
        const savedCategory = await category.save();
        res.status(201).json({
            message:"Category created successfully!!",
            category: savedCategory
        });
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while creating category" });
    }
};

// Retrieve all categories from the database.
exports.findAll = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        res.status(200).json(categories);
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving categories" });
    }
};

// Find a single category with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    
    try {
        const category = await categoryModel.findById(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving category" });
    }
};

// Update a category by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Data to update can not be empty!" });
        return;
    }
    
    const id = req.params.id;
    
    try {
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true });
        if (updatedCategory) {
            res.status(200).json({ message: "Category updated successfully", category: updatedCategory });
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while updating category" });
    }
};

// Delete a category with the specified id in the request
exports.destroy = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deletedCategory = await categoryModel.findByIdAndRemove(id);
        if (deletedCategory) {
            res.status(200).json({ message: "Category deleted successfully" });
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while deleting category" });
    }
};