const annonceobjetModel = require('../models/annonceobjet');
const userModel = require('../models/userModel');
const nodemailer = require('nodemailer');

// Create and Save a new annonce
exports.create = async (req, res) => {
    const { titre, Description, catégorie,Disponibilités, état_objet, adresse} = req.body;

    if (!titre) {
        res.status(400).send({ message: " annonce title can not be empty!" });
        return;
    }

    const annonceobjet = new annonceobjetModel({
        titre, Description, catégorie,Disponibilités, état_objet,adresse
    });

    try {
        const savedannonceobjet = await annonceobjet.save();

        const users = await userModel.find({ email: { $ne: null, $ne: '' } });
        for (const user of users) {
            await sendEmail(user.email);
        }

        res.status(201).json({
            message: "annonceobjet created successfully!!",
            annonceobjet: savedannonceobjet
        });
    } catch (error) {
        res.status(500).json({ message: error.message || "Some error occurred while creating annonceobjet" });
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





// Retrieve all annonceobjet from the database.
exports.findAll = async (req, res) => {
    try {
        const annonceobjet = await annonceobjetModel.find();
        res.status(200).json(annonceobjet);
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving annonceobjet" });
    }
};

// Find a single annonceobjet with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    
    try {
        const annonceobjet = await annonceobjetModel.findById(id);
        if (annonceobjet) {
            res.status(200).json(annonceobjet);
        } else {
            res.status(404).json({ message: "annonceobjet not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while retrieving annonceobjet" });
    }
};

// Update a annonceobjet by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Data to update can not be empty!" });
        return;
    }
    
    const id = req.params.id;
    
    try {
        const updatedannonceobjet = await annonceobjetModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true });
        if (updatedannonceobjet) {
            res.status(200).json({ message: "annonceobjet updated successfully", annonceobjet: updatedannonceobjet });
        } else {
            res.status(404).json({ message: "annonceobjet not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while updating annonceobjet" });
    }
};

// Delete a annonceobjet with the specified id in the request
exports.destroy = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deletedannonceobjet = await annonceobjetModel.findByIdAndRemove(id);
        if (deletedannonceobjet) {
            res.status(200).json({ message: "annonceobjet deleted successfully" });
        } else {
            res.status(404).json({ message: "annonceobjet not found" });
        }
    } catch(error) {
        res.status(500).json({ message: error.message || "Some error occurred while deleting annonceobjet" });
    }
};





// Récupérer tous les annonceobjet
exports.getAllannonceobjet = async (req, res) => {
    try {
        
        const annonceobjet = await annonceobjetModel.find();
        res.send(annonceobjet);
    } catch (error) {
        res.status(400).json(error)
    }
  };
  
 // Rechercher des annonceobjet en fonction des critères spécifiés
 exports.searchannonceobjet = async (req, res) => {
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
    const annonceobjet = await annonceobjetModel.find(searchCriteria);
    res.send(annonceobjet);
  };
  