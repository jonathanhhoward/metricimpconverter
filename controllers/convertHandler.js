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
      if (nums.length > 2) throw 'invalid input'
      result = nums[0] / nums[1]
    } else {
      result = Number.parseFloat(input)
    }
    return result
  }

  this.getUnit = function (input) {
    let result

    return result
  }

  this.getReturnUnit = function (initUnit) {
    let result

    return result
  }

  this.spellOutUnit = function (unit) {
    let result

    return result
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result

    return result
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result

    return result
  }

}

module.exports = ConvertHandler
