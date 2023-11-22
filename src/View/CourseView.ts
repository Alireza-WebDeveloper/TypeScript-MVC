import CourseController from '../Controller/CourseController';

class CourseView {
  private controller: typeof CourseController;
  private parElement: HTMLElement | null;

  constructor(controller: typeof CourseController) {
    this.controller = controller;
    this.parElement = document.querySelector('#course');
  }

  initial = async () => {
    try {
      if (this.parElement) {
        await this.controller.asyncGetAllCourses();
        this.render();
        this.addCourse();
      } else {
        console.error("Element with id 'course' not found.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  private renderCourseList() {
    return this.controller
      .getData()
      .map((course) => this.renderCourseItem(course))
      .join('');
  }

  private renderCourseItem({
    name,
    id,
    description,
  }: {
    name: string;
    id: number;
    description: string;
  }) {
    return `<div class="card">
    <div class="card-header">
      <h2>${name}</h2>
    </div>
    <div class="card-body">
      <p>${description}</p>
      <div class="button-container">
        <button class="button addCourse">add course</a>
      </div>
    </div>
  </div>
  `;
  }

  private render() {
    if (this.parElement) {
      this.parElement.innerHTML = this.renderCourseList();
    }
  }

  private addCourse() {
    this.parElement?.addEventListener('click', (e) => {
      if (e.target instanceof HTMLElement && e.target.closest('.addCourse')) {
        console.log('YES');
      }
    });
  }
}

export default new CourseView(CourseController);
