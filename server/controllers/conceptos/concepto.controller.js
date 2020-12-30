const Concepto = require('../../models/concepto/concepto');

const conceptoCtrl = {};

conceptoCtrl.getConceptos = async (req,res,next) => {
  try{
    const conceptos = await Concepto.find()
    res.json(conceptos);
  }catch(error){
    res.json(error)
  }
};

module.exports = conceptoCtrl;