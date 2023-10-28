export default class XmlRequest {
  constructor(url) {
    this.url = url;
  }

  async getAll(isImportant, name_like, isCompleted) {
    return new Promise((res, rej) => {
      let query = "?";
      if (isImportant !== null && isImportant !== undefined) {
        query += `isImportant=${isImportant}&`;
      }
      if (name_like !== null && name_like !== undefined) {
        query += `name_like=${name_like}&`;
      }
      if (isCompleted !== null && isCompleted !== undefined) {
        query += `isCompleted=${isCompleted}&`;
      }
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `${this.url}/tasks/${query}`);
      xhr.responseType = "json";
      xhr.onload = () => res(xhr.response);
      xhr.onerror = () => rej(xhr.status);
      xhr.send();
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  async getId(taskId) {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `${this.url}/tasks/${taskId}`);
      xhr.responseType = "json";
      xhr.onload = () => res(xhr.response);
      xhr.onerror = () => rej(xhr.status);
      xhr.send();
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  async post(name = "Anonim", info = "unknown", isImportant = false) {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${this.url}/tasks`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.responseType = "json";
      xhr.onload = () => res(xhr.response);
      xhr.onerror = () => rej(xhr.status);
      xhr.send(
        JSON.stringify({
          name: `${name}`,
          info: `${info}`,
          isImportant: isImportant,
        })
      );
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  async patchId(taskId, name, info, isImportant, isCompleted = false) {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open("PATCH", `${this.url}/tasks/${taskId}`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.responseType = "json";
      xhr.onload = () => res(xhr.response);
      xhr.onerror = () => rej(xhr.status);
      xhr.send(
        JSON.stringify({
          name: `${name}`,
          info: `${info}`,
          isImportant: isImportant,
          isCompleted: isCompleted,
        })
      );
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  async deleteId(taskId) {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", `${this.url}/tasks/${taskId}`);
      xhr.responseType = "json";
      xhr.onerror = () => rej(xhr.status);
      xhr.onload = () => res(xhr.status);
      xhr.send();
    })
      .then((res) => {
        if (res == 200) {
          console.log("Пользователь удален");
          return;
        }
      })
      .catch((err) => console.error(err));
  }
}
