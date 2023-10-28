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
