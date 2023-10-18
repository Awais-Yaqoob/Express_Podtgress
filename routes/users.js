var express = require('express');
var router = express.Router();
const { getUser, createUser } = require("../Controllers/userController");

router.get("/", getUser);
router.post("/createUser", createUser);

module.exports = router;


// router.get('/', async(req, res) =>{
//     try {
//     const allUsers = await user.findAll();
//     if(allUsers){
//     res.json(allUsers);}
//     else{
//       res.json("Empty")
//     }
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// router.post('/create', async (req, res) => {
//   try {
//     //const { firstName, lastName, email, phoneNumber, ...user } = req.body;

//     const {firstName, lastName, email, phoneNumber} = req.body;
//     const newUser = await user.create({ firstName, lastName, email, phoneNumber});
//     res.json(newUser);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
// module.exports = router;
