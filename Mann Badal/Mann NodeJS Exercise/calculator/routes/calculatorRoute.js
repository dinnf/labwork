const express = require('express');
var calculatorController = require('./controllers/calculatorController')
const router = express.Router();

router.get('/add', (req, res) => {
        calculatorController.addNumbers(req,res)
        })

router.get('/sub', (req, res) => {
        calculatorController.subNumbers(req,res)
        })
router.get('/mul', (req, res) => {
        calculatorController.mulNumbers(req,res)
        })
router.get('/div', (req, res) => {
        calculatorController.divNumbers(req,res)
        })
module.exports = router;