const express = require('express');
const router = express.Router();

const user = require('../../controllers/conceptos/concepto.controller');

router.get('/', user.getConceptos);
// router.post('/', user.getConcepto);
// router.post('/crear', user.createConcepto);

module.exports = router;