const courseService = require("../Services/courseServices");

module.exports = {
  getCourse: async (req, res) => {
    const data = await courseService.getCourse();
    res.send(data);
  },
  createCourse: async (req, res) => {
    const result = await courseService.createCourse(req.body);
    // const { firstName, lastName, email, phoneNumber, ...student } = req.body;
    // const user = await userService.createUser(req.body);
    res.json(result);
  },
};