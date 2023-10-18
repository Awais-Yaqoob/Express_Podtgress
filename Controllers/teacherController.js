const teacherService = require("../Services/teacherServices");

module.exports = {
  getTeacher: async (req, res) => {
    const data = await teacherService.getTeacher();
    res.send(data);
  },
  createTeacher: async (req, res) => {
    const result = await teacherService.createTeacher(req.body);
    // const { firstName, lastName, email, phoneNumber, ...student } = req.body;
    // const user = await userService.createUser(req.body);
    res.json(result);
  },
};