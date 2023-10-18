const { models } = require("../models/definations");
const userService = require("../Services/userServices");

module.exports = {
  getTeacher: async () => {
    const result = await models.teacher.findAll();
    return result;
  },
  createTeacher: async (data) => {
    // console.log("data", data);

    const { firstName, lastName, email, phoneNumber, ...teacher } = data;
    const user = await userService.createUser(data);
    console.log(user)

    const result = await models.teacher.create({
      userID: user.id,
        Scale: data.scale,
        department: data.department
    });
    // console.log("result", result);
    return result;
  },
};