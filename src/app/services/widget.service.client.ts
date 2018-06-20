export class WidgetServiceClient {
  LESSON_URL = 'https://stern-webdev-angular.herokuapp.com/api/lesson';
  findWidgetsForLesson(lessonId) {
    return fetch(this.LESSON_URL + lessonId + '/widget')
      .then(response => response.json());
  }
}
