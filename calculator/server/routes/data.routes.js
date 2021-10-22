const {Router} = require('express');
const calculator = require('../middleware/auth.middleware')

const router = Router();


router.post(
  '/', calculator,
  async (req, res) => {
    try{
      if(!req.body) {
        res.status(400).json({ message: 'I need numbers'})
      }
      res.status(200).json({ message: 'ok, it works but i didnt get data'})
    } catch (err){
      res.status(500).json({ message: 'something went wrong'})
    }

  }
)
