/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler () {

  this.getNum = function (input) {
    const trim = input.trim()
    const i = indexOfFirstAlpha(trim)

    if (i === 0) return 1

    const num = (i !== -1) ? trim.slice(0, i) : trim

    const matches = num.match(
      /^(\d+|\d+\.\d*|\d*\.\d+)( *\/ *(\d+|\d+\.\d*|\d*\.\d+))? *$/
    )

    return (matches)
      ? Number.parseFloat(matches[1]) / (Number.parseFloat(matches[3]) || 1)
      : null
  }

  this.getUnit = function (input) {
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
    const i = indexOfFirstAlpha(input)

    let unit = (i !== -1) ? input.slice(i).trim().toLowerCase() : ''

    return (validUnits.includes(unit)) ? unit : null
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

    switch (initUnit) {
      case 'gal':
        return initNum * galToL
      case 'l':
        return initNum / galToL
      case 'mi':
        return initNum * miToKm
      case 'km':
        return initNum / miToKm
      case 'lbs':
        return initNum * lbsToKg
      case 'kg':
        return initNum / lbsToKg
      default:
        return null
    }
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const spellInitUnit = this.spellOutUnit(initUnit)
    const spellReturnUnit = this.spellOutUnit(returnUnit)

    return String(
      `${initNum} ${spellInitUnit} converts to ${returnNum} ${spellReturnUnit}`
    )
  }

}

function indexOfFirstAlpha (aString) {
  return aString.search(/[a-z]/i)
}

module.exports = ConvertHandler
