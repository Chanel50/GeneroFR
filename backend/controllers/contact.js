const contactModel = require('../models/contact');

// Create and Save a new contact
exports.create = async (req, res) => {
    const { nom,prenom, email,telephone,message } = req.body;
    
    if (!nom) {
        res.status(400).send({ message: "contact name can not be empty!" });
        return;
    }
    
    const contact = new contactModel({
        nom, prenom, email,telephone,message 
    });
    
    try {
        const savedcontact = await contact.save();
        res.status(201).json({
            message:"contact created successfully!!",
            contact: savedcontact
        });
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while creating contact" });
    }
};

// Retrieve all contacts from the database.
exports.findAll = async (req, res) => {
    try {
        const contacts = await contactModel.find();
        res.status(200).json(contacts);
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving categories" });
    }
};

// Find a single contact with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    
    try {
        const contact = await contactModel.findById(id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({ message: "contact not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving contact" });
    }
};

// Update a contact by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Data to update can not be empty!" });
        return;
    }
    
    const id = req.params.id;
    
    try {
        const updatedcontact = await contactModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true });
        if (updatedcontact) {
            res.status(200).json({ message: "contact updated successfully", contact: updatedcontact });
        } else {
            res.status(404).json({ message: "contact not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while updating contact" });
    }
};

// Delete a contact with the specified id in the request
exports.destroy = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deletedcontact = await contactModel.findByIdAndRemove(id);
        if (deletedcontact) {
            res.status(200).json({ message: "contact deleted successfully" });
        } else {
            res.status(404).json({ message: "contact not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while deleting contact" });
    }
};
// Count the number of contacts
exports.count = async (req, res) => {
    try {
        const count = await contactModel.countDocuments();
        res.status(200).json({ count });
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while counting contacts" });
    }
};