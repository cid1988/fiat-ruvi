const mongoose = require('mongoose');
const { Schema } = mongoose;

var conceptoSchema = new Schema({
  nombre: {type: String}
},{
  versionKey: false
})

module.exports = mongoose.model('Concepto', conceptoSchema, 'conceptos')