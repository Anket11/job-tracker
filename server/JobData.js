const mongoose = require('mongoose');

const JobDataSchema = new mongoose.Schema({
    listName: String,
    cardList: [{
      role: String,
      companyName: String,
    }],  
  })

  module.exports = mongoose.model('JobData', JobDataSchema);