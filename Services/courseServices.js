const { models } = require("../models/definations");

module.exports = {
  getCourse: async () => {
    const result = await models.course.findAll();
    return result;
  },
  createCourse: async (data) => {

    const result = await models.course.create({
        subject: data.subject,
        description: data.description
    });
    // console.log("result", result);
    return result;
  },
};