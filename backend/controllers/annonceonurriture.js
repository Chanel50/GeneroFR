const annonceonurritureModel = require('../models/annonceonurriture');
const userModel = require('../models/userModel');
const nodemailer = require('nodemailer');

// Create and Save a new annonce
exports.create = async (req, res) => {
    const { titre, Description, Disponibilités, date_de_consommation_limite, adresse} = req.body;

    if (!titre) {
        res.status(400).send({ message: " annonce title can not be empty!" });
        return;
    }

    const annonceonurriture = new annonceonurritureModel({
        titre, Description, catégorie,Disponibilités, date_de_consommation_limite,adresse
    });

    try {
        const savedannonceonurriture = await annonceonurriture.save();

        const users = await userModel.find({ email: { $ne: null, $ne: '' } });
        for (const user of users) {
            await sendEmail(user.email);
        }

        res.status(201).json({
            message: "annonceonurriture created successfully!!",
            annonceonurriture: savedannonceonurriture
        });
    } catch (error) {
        res.status(500).json({ message: error.message || "Some error occurred while creating annonceonurriture" });
    }
};

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hamelchanel10@gmail.com',
                pass: 'fejtefyrhywmcukg'
            }
        })
        const mail_configs = {
            from: 'hamelchanel10@gmail.com',
            to: email,
            subject: 'Nouveau objet ajouté',
            text: 'Bonjour Giveur il y a un nouveau Objet '
        }
        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error)
                return reject({ message: 'an error has occured' })
            }
            return resolve({ message: "Email sent succesfuly" })
        })
    })
}





// Retrieve all annonceonurriture from the database.
exports.findAll = async (req, res) => {
    try {
        const annonceonurriture = await annonceonurritureModel.find();
        res.status(200).json(annonceonurriture);
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving annonceonurriture" });
    }
};

// Find a single annonceonurriture with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    
    try {
        const annonceonurriture = await annonceonurritureModel.findById(id);
        if (annonceonurriture) {
            res.status(200).json(annonceonurriture);
        } else {
            res.status(404).json({ message: "annonceonurriture not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving annonceonurriture" });
    }
};

// Update a annonceonurriture by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Data to update can not be empty!" });
        return;
    }
    
    const id = req.params.id;
    
    try {
        const updatedannonceonurriture = await annonceonurritureModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true });
        if (updatedannonceonurriture) {
            res.status(200).json({ message: "annonceonurriture updated successfully", annonceonurriture: updatedannonceonurriture });
        } else {
            res.status(404).json({ message: "annonceonurriture not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while updating annonceonurriture" });
    }
};

// Delete a annonceonurriture with the specified id in the request
exports.destroy = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deletedannonceonurriture = await annonceonurritureModel.findByIdAndRemove(id);
        if (deletedannonceonurriture) {
            res.status(200).json({ message: "annonceonurriture deleted successfully" });
        } else {
            res.status(404).json({ message: "annonceonurriture not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while deleting annonceonurriture" });
    }
};





// Récupérer tous les annonceonurriture
exports.getAllannonceonurriture = async (req, res) => {
    try {
        
        const annonceonurriture = await annonceonurritureModel.find();
        res.send(annonceonurriture);
    } catch (error) {
        res.status(400).json(error)
    }
  };
  
 // Rechercher des annonceonurriture en fonction des critères spécifiés
 exports.searchannonceonurriture = async (req, res) => {
    const { catégorie, Description, adresse, titre } = req.query;
    const searchCriteria = {};
    if (catégorie) {
      searchCriteria.catégorie = catégorie;
    }
    if (Description) {
      searchCriteria.Description = Description;
    }
    if (adresse) {
      searchCriteria.note = adresse ;
    }
    if (titre) {
      searchCriteria.titre = titre;
    }
    const annonceonurriture = await annonceonurritureModel.find(searchCriteria);
    res.send(annonceonurriture);
  };
  