/*
*
*
*       Complete the API routing below
*
*
*/

'use strict'

const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {

  const convertHandler = new ConvertHandler()

  app.route('/api/convert')
    .get(function (req, res) {
      const input = req.query.input
      const initNum = roundToFive(convertHandler.getNum(input))
      const initUnit = convertHandler.getUnit(input)

      if (!initNum && !initUnit)
        return res.json({ error: 'invalid number and unit' })
      if (!initNum)
        return res.json({ error: 'invalid number' })
      if (!initUnit)
        return res.json({ error: 'invalid unit' })

      const returnNum = roundToFive(convertHandler.convert(initNum, initUnit))
      const returnUnit = convertHandler.getReturnUnit(initUnit)
      const string = convertHandler.getString(
        initNum, initUnit, returnNum, returnUnit
      )

      res.json({ initNum, initUnit, returnNum, returnUnit, string })
    })

}

function roundToFive (aNumber) {
  return Math.round(aNumber * 1e5 + Number.EPSILON) / 1e5
}
