
module.exports = (req, res, next) => {
    try {
      if (req.body.operator === '/') {
        const doCalc = (num1, num2) => {
            const calculation = num1 / num2;
            req.body.result = calculation
        }
        doCalc(req.body.firstNum, req.body.secondNum)
        return next()
      }

      if (req.body.operator === '*') {
        const doCalc = (num1, num2) => {
            const calculation = num1 * num2;
            req.body.result = calculation
        }
        doCalc(req.body.firstNum, req.body.secondNum)
        return next()
      }

      if (req.body.operator === '-') {
        const doCalc = (num1, num2) => {
            const calculation = num1 - num2;
            req.body.result = calculation
        }
        doCalc(req.body.firstNum, req.body.secondNum)
        return next()
      }

      if (req.body.operator === '+') {
        const doCalc = (num1, num2) => {
            const calculation = num1 + num2;
            req.body.result = calculation
        }
        doCalc(req.body.firstNum, req.body.secondNum)
        return next()
      }

      return next()
    } catch (e) {
      return res.status(401).json({ message: 'No valid data'})
    }
}
