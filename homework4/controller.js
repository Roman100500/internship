export default class Controller {
  constructor(request) {
    this.request = request;
  }

  async getAll(isImportant, name_like, isCompleted) {
    this.request.getAll(isImportant, name_like, isCompleted);
  }

  async getId(taskId) {
    this.request.getId(taskId);
  }

  async patchId(taskId, name, info, isImportant, isCompleted) {
    this.request.patchId(taskId, name, info, isImportant, isCompleted);
  }

  async post(name, info, isImportant) {
    this.request.post(name, info, isImportant);
  }

  async deleteId(taskId) {
    this.request.deleteId(taskId);
  }
}
