import axios from 'axios';

interface CourseDataResponse {
  id: number;
  name: string;
  description: string;
}

interface CourseModelType {
  getAllCourses(): Promise<void>;
}

class CourseModel implements CourseModelType {
  private data: CourseDataResponse[] = [];

  getAllCourses = async (): Promise<void> => {
    try {
      const response = await axios.get<CourseDataResponse[]>(
        'http://localhost:5007/course'
      );
      this.data = response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  getData() {
    return this.data;
  }
}

export default new CourseModel();
