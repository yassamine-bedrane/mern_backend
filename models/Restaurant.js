const mongoose = require('mongoose');
const { Schema } = mongoose;

const restauSchema = new Schema({
  name: { type: String, required: true },
  adresse: { type: String, required: false },
  latitude: { type: Number, required: false },
  longitude: { type:Number, required: false },
  rank: { type: Number, required: false },
  ouvert: { type: String, required: false },
  fermé: { type: String, required: false },
  photo:[{type:String,required:false}],
  zone: { type: Schema.Types.ObjectId, ref: 'Zone', required: true },
  specialite : [{ type: Schema.Types.ObjectId, ref: 'Specialite', required: true }],
  // serie: {type:String, required:false},
});

const Restaurant = mongoose.model('Restaurant', restauSchema);

module.exports = Restaurant;
