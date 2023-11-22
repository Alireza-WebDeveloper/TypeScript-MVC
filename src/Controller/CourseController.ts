import CourseModel from '../Model/CourseModel';

class CourseController {
  constructor(private model: typeof CourseModel) {
    this.model = model;
  }
  asyncGetAllCourses = async () => {
    try {
      await this.model.getAllCourses();
    } catch (err) {
      throw new Error(err);
    }
  };
  getData() {
    return this.model.data;
  }
}

export default new CourseController(CourseModel);
