const replyModel = require('../models/reply');

// Create and Save a new reply
exports.create = async (req, res) => {
    const { reply, id_utilisateur, id_article } = req.body;
    
    if (!reply) {
        res.status(400).send({ message: "reply reply can not be empty!" });
        return;
    }
    
    const replyObject = new replyModel({
        reply,
        id_utilisateur,
        id_article
    });
    
    try {
        const savedreply = await replyObject.save();
        res.status(201).json({
            message:"reply created successfully!!",
            reply: savedreply
        });
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while creating reply" });
    }
};

// Retrieve all reply from the database.
exports.findAll = async (req, res) => {
    try {
        const reply = await replyModel.find();
        res.status(200).json(reply);
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving reply" });
    }
};

// Find a single reply with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    
    try {
        const reply = await replyModel.findById(id);
        if (reply) {
            res.status(200).json(reply);
        } else {
            res.status(404).json({ message: "reply not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving reply" });
    }
};

// Update a reply by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Data to update can not be empty!" });
        return;
    }
    
    const id = req.params.id;
    
    try {
        const updatedreply = await replyModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true });
        if (updatedreply) {
            res.status(200).json({ message: "reply updated successfully", reply: updatedreply });
        } else {
            res.status(404).json({ message: "reply not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while updating reply" });
    }
};

// Delete a reply with the specified id

exports.destroy = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deletedreply = await replyModel.findByIdAndRemove(id);
        if (deletedreply) {
            res.status(200).json({ message: "reply deleted successfully" });
        } else {
            res.status(404).json({ message: "reply not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while deleting reply" });
    }
};