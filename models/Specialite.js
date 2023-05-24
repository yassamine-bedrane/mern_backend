const mongoose = require('mongoose');
const { Schema } = mongoose;

const specialiteSchema = new Schema({
  name: { type: String, required: true },
});

const Specialite = mongoose.model('Specialite', specialiteSchema);

module.exports = Specialite;
