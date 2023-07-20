const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
function verifyRole(roles) {
    return function(req, res, next) {
      if (req.user && _.isEqual(roles, req.user.roles)) {
        next(); // Allow the user to access the route
      } else {
        res.status(403).json({ message: "Access forbidden" }); // Return 403 Forbidden status
      }
    };
  }
  
  module.exports = verifyRole;