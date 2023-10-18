const studentService = require("../Services/studentServices");

module.exports = {
  getStudent: async (req, res) => {
    const data = await studentService.getStudent();
    res.send(data);
  },
  createStudent: async (req, res) => {
    const result = await studentService.createStudent(req.body);
    // const { firstName, lastName, email, phoneNumber, ...student } = req.body;
    // const user = await userService.createUser(req.body);
    res.json(result);
  },
};