const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const Crud = require("../models/articleModel");
const userModel = require("../models/userModel");

const getCrud = (req, res) => {
  res.json(res.pagination);
};

const addCrud = async (req, res, next) => {
  const id = uuidv4();
  const titre = req.body.titre;
  const Description = req.body.Description;
  const categorie = req.body.categorie;
  const Disponibilites = req.body.Disponibilites;
  const etat_objet = req.body.etat_objet;
  const adresse = req.body.adresse;
  const telephone = req.body.telephone;
  const image = req.file.filename;
  const data = { id, titre, Description, categorie, Disponibilites, etat_objet, adresse,telephone, image };

  console.log(data);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send({ error: 'true', msg: errors.errors[0] });
  } else {
    try {
      const newCrud = new Crud(data);
      await newCrud.save();

      const users = await userModel.find({ email: { $ne: null, $ne: '' } });
      for (const user of users) {
        await sendEmail(user.email);
      }

      return res.status(200).json("Crud's Data Added Successfully");
    } catch (err) {
      return res.status(400).json("Error: " + err);
    }
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
      subject: 'Nouveau objet ajoute',
      text: 'Bonjour Giveur il y a un nouveau Objet '
    }
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error)
        return reject({ message: 'an error has occurred' })
      }
      return resolve({ message: "Email sent successfully" })
    })
  })
}

const deleteCrud = (req, res) => {
  const CrudId = req.params.id;

  Crud.findByIdAndDelete(CrudId)
    .then(() => res.json("Crud's Data Deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const editCrud = (request, response) => {
  const id = request.body._id;
  const titre = request.body.titre;
  const Description = req.body.Description;
  const categorie = req.body.categorie;
  const Disponibilites = req.body.Disponibilites;
  const etat_objet = req.body.etat_objet;
  const adresse = req.body.adresse;
  const telephone = req.body.telephone;
  const image = request.file.path;
  const updatedData = { titre,  Description, categorie,Disponibilites, etat_objet, adresse,telephone, image };

  Crud.updateOne({_id: id}, updatedData )
  .then((update) => {
      if(update) {
          return response.status(200).json("Updated Successfully");
      } else {
          return response.status(404).json("Error while Updating")
      }
  })
  .catch((err) => response.status(404).json("Error:" + err));

}


const db = mongoose.connection;
db.once("open", async () => {
  if ((await Crud.countDocuments().exec()) > 0) {
    return;
  }
  Crud.insertMany([]) // Pass an empty array instead of `Crud`
    .then(() => console.log("Crud added Successfully"))
    .catch((err) => console.log("Error: " + err));
});

const crud_search = async (req, res) => {
  const {  titre,categorie, Description, adresse } = req.query;
  const searchCriteria = {};

  if (titre) {
    searchCriteria.titre = { $regex: new RegExp(titre, 'i') };
  }
  if (categorie) {
    searchCriteria.categorie = { $regex: new RegExp(categorie, 'i') };
  }
  if (Description) {
    searchCriteria.Description = { $regex: new RegExp(Description, 'i') };
  }
  if (adresse) {
    searchCriteria.adresse = { $regex: new RegExp(adresse, 'i') };
  }
  console.log(searchCriteria)
  try {
    const cruds = await Crud.find(searchCriteria);
    res.send(cruds);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error searching for data");
  }
};
const countCrud = async (req, res) => {
  try {
    const count = await Crud.countDocuments().exec();
    res.json({ count });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error counting CRUD operations");
  }
};

module.exports = { getCrud, addCrud, deleteCrud, editCrud, crud_search, countCrud };
