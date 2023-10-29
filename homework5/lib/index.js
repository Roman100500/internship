'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
// fetch
class FetchRequest {
  constructor(url) {
    this.url = url;
  }
  getAll(isImportant, name_like, isCompleted) {
    return __awaiter(this, void 0, void 0, function* () {
      let query = '?';
      if (isImportant !== null && isImportant !== undefined) {
        query += `isImportant=${isImportant}&`;
      }
      if (name_like !== null && name_like !== undefined) {
        query += `name_like=${name_like}&`;
      }
      if (isCompleted !== null && isCompleted !== undefined) {
        query += `isCompleted=${isCompleted}&`;
      }
      const response = yield fetch(`${this.url}/tasks${query}`);
      if (!response.ok) {
        console.error('Запрос не удался');
        return;
      }
      const data = yield response.json();
      console.log(data);
    });
  }
  getId(taskId) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(`${this.url}/tasks/${taskId}`);
      if (!response.ok) {
        console.error('Запрос не удался');
        return;
      }
      const data = yield response.json();
      console.log(data);
    });
  }
  post(name = 'Anonim', info = 'unknown', isImportant = false) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(`${this.url}/tasks`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: `${name}`,
          info: `${info}`,
          isImportant: isImportant,
        }),
      });
      if (!response.ok) {
        console.error('Запрос не удался');
        return;
      }
      const data = yield response.json();
      console.log(data);
    });
  }
  patchId(taskId, name, info, isImportant, isCompleted = false) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(`${this.url}/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: `${name}`,
          info: `${info}`,
          isImportant: isImportant,
          isCompleted: isCompleted,
        }),
      });
      if (!response.ok) {
        console.error('Запрос не удался');
        return;
      }
      const data = yield response.json();
      console.log(data);
    });
  }
  deleteId(taskId) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(`${this.url}/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        console.error('Запрос не удался');
        return;
      }
      console.log('Пользователь удален');
    });
  }
}
const request = new FetchRequest('http://37.220.80.108');
// request.getAll();
// request.getId('6');
// request.post('Victoria', 'doctor', false);
// request.patchId('7', 'Oleg', 'doctor', false, true);
// request.deleteId('8');

// XMLHttpRequest
class XmlRequest {
  constructor(url) {
    this.url = url;
  }
  getAll(isImportant, name_like, isCompleted) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((res, rej) => {
        let query = '?';
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
        xhr.open('GET', `${this.url}/tasks/${query}`);
        xhr.responseType = 'json';
        xhr.onload = () => res(xhr.response);
        xhr.onerror = () => rej(xhr.status);
        xhr.send();
      })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    });
  }
  getId(taskId) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.url}/tasks/${taskId}`);
        xhr.responseType = 'json';
        xhr.onload = () => res(xhr.response);
        xhr.onerror = () => rej(xhr.status);
        xhr.send();
      })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    });
  }
  post(name = 'Anonim', info = 'unknown', isImportant = false) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${this.url}/tasks`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
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
    });
  }
  patchId(taskId, name, info, isImportant, isCompleted = false) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PATCH', `${this.url}/tasks/${taskId}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
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
    });
  }
  deleteId(taskId) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${this.url}/tasks/${taskId}`);
        xhr.responseType = 'json';
        xhr.onerror = () => rej(xhr.status);
        xhr.onload = () => res(xhr.status);
        xhr.send();
      })
        .then((res) => {
          if (res == 200) {
            console.log('Пользователь удален');
            return;
          }
        })
        .catch((err) => console.error(err));
    });
  }
}
const request2 = new XmlRequest('http://37.220.80.108');
// request2.getAll();
// request2.getId('6');
// request2.post('Victoria', 'doctor', false);
// request2.patchId('7', 'Oleg', 'doctor', false, true);
// request2.deleteId('8');
//# sourceMappingURL=index.js.map
