/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler () {

  this.getNum = function (input) {
    let result
    if (input.includes('/')) {
      const nums = input.split('/').map(num => Number.parseFloat(num))
      if (nums.length > 2) throw 'invalid number'
      result = nums[0] / nums[1]
    } else if (/^[a-z]/i.test(input)) {
      result = 1
    } else {
      result = Number.parseFloat(input)
    }
    return result
  }

  this.getUnit = function (input) {
    const match = input.match(/[a-z]+$/i)
    if (!match) throw 'no unit'
    let result = match[0].toLowerCase()
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
    if (!validUnits.includes(result)) throw 'invalid unit'
    return result
  }

  this.getReturnUnit = function (initUnit) {
    const initUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
    const returnUnits = ['l', 'gal', 'km', 'mi', 'kg', 'lbs']
    return returnUnits[initUnits.indexOf(initUnit)]
  }

  this.spellOutUnit = function (unit) {
    const abbr = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
    const spell = [
      'gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'
    ]
    return spell[abbr.indexOf(unit)]
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      default:
        throw 'invalid unit'
    }
    return result
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result

    return result
  }

}

module.exports = ConvertHandler
