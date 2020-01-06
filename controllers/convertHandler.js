/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler () {

  this.getNum = function (input) {
    if (startsWithUnit(input)) return 1
    const num = input.slice(0, unitIndex(input))
    const validNum = /^ *(\d+|\d+\.\d*|\d*\.\d+)( *\/ *(\d+|\d+\.\d*|\d*\.\d+))? *$/
    const matches = num.match(validNum)
    if (!matches) throw 'invalid number'
    return Number.parseFloat(matches[1]) / (Number.parseFloat(matches[3]) || 1)
  }

  this.getUnit = function (input) {
    let result = input.slice(unitIndex(input)).trim().toLowerCase()
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
    switch (initUnit) {
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
    const spellInit = this.spellOutUnit(initUnit)
    const spellReturn = this.spellOutUnit(returnUnit)
    return `${initNum} ${spellInit} converts to ${returnNum} ${spellReturn}`
  }

}

function startsWithUnit (input) {
  return /^ *[a-z]/i.test(input)
}

function unitIndex(input) {
  const result = input.search(/[a-z]/i)
  if (result === -1) throw 'no unit'
  return result
}


module.exports = ConvertHandler
