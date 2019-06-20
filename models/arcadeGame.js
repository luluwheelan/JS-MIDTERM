//Create/Repair a new model called ArcadeGame with the following attributes:

// Title
// Rating
// Description
//Genre (enum) [fighting, sports, strategy, puzzle, arcade, platformer, other]

// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const ArcadeGameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    enum: ['FIGHTING', 'SPORT', 'STRATEGY', 'PUZZLE', 'ARCADE', 'PLATFORMER', 'OTHER'],
    default: 'OTHER'
},
}, {
  timestamps: true
});

// Exporting our ArcadeGame model
module.exports = mongoose.model('ArcadeGame', ArcadeGameSchema);