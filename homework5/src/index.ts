// fetch
class FetchRequest {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getAll(isImportant?: boolean, name_like?: string, isCompleted?: boolean): Promise<void> {
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
    const response = await fetch(`${this.url}/tasks${query}`);

    if (!response.ok) {
      console.error('Запрос не удался');
      return;
    }

    const data = await response.json();
    console.log(data);
  }

  async getId(taskId: string): Promise<void> {
    const response = await fetch(`${this.url}/tasks/${taskId}`);

    if (!response.ok) {
      console.error('Запрос не удался');
      return;
    }

    const data = await response.json();
    console.log(data);
  }

  async post(name = 'Anonim', info = 'unknown', isImportant = false): Promise<void> {
    const response = await fetch(`${this.url}/tasks`, {
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

    const data = await response.json();
    console.log(data);
  }

  async patchId(taskId: string, name: string, info: string, isImportant: boolean, isCompleted = false): Promise<void> {
    const response = await fetch(`${this.url}/tasks/${taskId}`, {
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

    const data = await response.json();
    console.log(data);
  }

  async deleteId(taskId: string): Promise<void> {
    const response = await fetch(`${this.url}/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Запрос не удался');
      return;
    }

    console.log('Пользователь удален');
  }
}

const request = new FetchRequest('http://37.220.80.108');
request.getAll();
request.getId('6');
request.post('Victoria', 'doctor', false);
request.patchId('7', 'Oleg', 'doctor', false, true);
request.deleteId('8');

// XMLHttpRequest
class XmlRequest {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getAll(isImportant?: boolean, name_like?: string, isCompleted?: boolean): Promise<void> {
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
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open('GET', `${this.url}/tasks/${query}`);
      xhr.responseType = 'json';
      xhr.onload = () => res(xhr.response);
      xhr.onerror = () => rej(xhr.status);
      xhr.send();
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  async getId(taskId: string): Promise<void> {
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
  }

  async post(name = 'Anonim', info = 'unknown', isImportant = false): Promise<void> {
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
  }

  async patchId(taskId: string, name: string, info: string, isImportant: boolean, isCompleted = false): Promise<void> {
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
  }

  async deleteId(taskId: string): Promise<void> {
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
  }
}
const request2 = new XmlRequest('http://37.220.80.108');
request2.getAll();
request2.getId('6');
request2.post('Victoria', 'doctor', false);
request2.patchId('7', 'Oleg', 'doctor', false, true);
request2.deleteId('8');
