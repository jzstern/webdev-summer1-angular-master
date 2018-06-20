export class LessonServiceClient {
  LESSON_URL = 'https://stern-webdev-angular.herokuapp.com/api/course';
  findLessonsForModule(moduleId) {
    return fetch(LESSON_URL + '/CID/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
