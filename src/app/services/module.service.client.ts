export class ModuleServiceClient {
  MODULE_URL = 'http://localhost:8080/api/course/COURSE_ID/module';
  LESSON_URL = 'https://stern-webdev-angular.herokuapp.com/api/course';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
