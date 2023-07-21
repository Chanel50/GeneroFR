const userModel = require('../models/userModel');
const contactModel = require('../models/contact');
const articleModel = require('../models/articleModel');

const getStatistics = async (req, res) => {
  try {
    const userCount = await userModel.countDocuments();
    const contactCount = await contactModel.countDocuments();
    const articleCount = await articleModel.countDocuments();
    
      const hommeUserCount = await userModel.countDocuments({ genre: 'homme' });
      const femmeUserCount = await userModel.countDocuments({ genre: 'femme' });
  

    res.json({
      userCount: userCount,
      contactCount: contactCount,
      articleCount: articleCount,
      hommeUserCount: hommeUserCount,
      femmeUserCount: femmeUserCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Une erreur s\'est produite lors de la récupération des statistiques.' });
  }
};

module.exports = { getStatistics };
